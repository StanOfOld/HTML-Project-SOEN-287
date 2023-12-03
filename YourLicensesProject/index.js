const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const dbhandler = require('./dbhandler');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const publicPath = path.join(__dirname, 'Public');

console.log("isit")

app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended:false
}));
app.use(cookieParser());
app.use(function(req, res, next) {
  fs.readFile(path.join(publicPath, 'navbar.html'), 'utf8', function(err, data) {
    if (err) {
      return next(err);
    }
    res.locals.navbar = data;
    next();
  });
});

app.use(function(req, res, next) {
	fs.readFile(path.join(publicPath, 'navbarloggedin.html'), 'utf8', function(err, data) {
	  if (err) {
		return next(err);
	  }
	  res.locals.navbarli = data;
	  next();
	});
  });

app.get('/', function (req, res) {
    res.redirect("/home");
});

app.get('/:route', function (req, res) {

	dbhandler.getAccountFromAutkey(req.cookies.autkey, function(account, valid) {

		var autaccountid = account ? account.accountID : null;

		var route = req.params.route;
		console.log("get" + route);
		var displayhtml = function(err, data){
			if (err) {
				res.writeHead(404, {'Content-Type': 'text/html'});
				return res.end("404 Not Found");
			} 

			var htmlString = data.toString('utf-8');

			htmlString = htmlString.replace('<!-- Navbar Placeholder -->', autaccountid ? res.locals.navbarli : res.locals.navbar);
			htmlString = htmlString.replace('<!-- Account name -->', autaccountid ? account.firstName + " " + account.lastName : "Unknown");
			if(account && account.provider)
				htmlString = htmlString.replace('<!-- Provider link -->', `<li class="nav-item"><a class="nav-link" href="provider">Licenses</a></li>`);

			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(htmlString);
			return res.end();
		};
		var readhtml = (htmlfile) => {fs.readFile(path.join(publicPath, htmlfile), displayhtml)};

		var getdata = function(data, valid){
			if (valid) {
				res.json(data);
				console.log(data);
				console.log("data sent off");
			} else {
				console.log("invalid");
				res.status(500).send('Internal Server Error');
			}
		};
		//console.log(req.query.page);
		//console.log(1);

		switch(route){
			case "home": readhtml("home.html"); break;
			case "browse": readhtml("browse.html"); break;
			case "buy": readhtml("buy.html"); break;
			case "clientinfo": readhtml("ClientInfo.html"); break;
			case "login": readhtml("login.html"); break;
			case "signup": readhtml("signup.html"); break;
			case "provider": readhtml("Provider.html"); break;
			case "mainclient": readhtml("MainClient.html"); break;
			case "licensedb": readhtml("LicenseDatabase.html"); break;

			case "deleteLicense": dbhandler.deleteLicense(req.query.licenseid, function(result, valid){if(valid) {res.redirect("/mainclient");}}); break;
			case "renewLicense": dbhandler.renewLicense(req.query.licenseid, function(result, valid){if(valid) {res.redirect("/mainclient");}}); break;
			case "getSoftwareList": dbhandler.getSoftwareList(req.query.page || 1, 10, req.query.genre || null, req.query.search || null, getdata); break;
			case "getSoftware": if(req.query.id){dbhandler.getSoftwareById(req.query.id, getdata);}; break;
			case "getTopSoftware": dbhandler.getTopDownloadedSoftware(getdata); break;
			case "getlicenses": dbhandler.getLicensesWithSoftwareInfo(autaccountid || req.query.accountID, getdata); break;
			//case "getsoftware": dbhandler.getAllSoftware(getdata); break;
			case "getaccountinfo": dbhandler.getAccountById(autaccountid || req.query.accountID, getdata); break;
			case "logout": generateNewAutKey(autaccountid, function (account, valid) {if (valid && account) {res.redirect("/home");}}); break;
			case "getSoftwareListOwner": dbhandler.getSoftwaresFromOwnerId(autaccountid, getdata); break;
			default: readhtml("NotFound.html"); break;
		}
	})
});

app.post('/:endpoint', function (req, res) {

	dbhandler.getAccountFromAutkey(req.cookies.autkey, function(account, valid) {

		var autaccountid = account ? account.accountID : null;

		if (req.method !== 'POST') {
			return res.status(405).send('Method Not Allowed');
		}

		const endpoint = req.params.endpoint;
		const postData = req.body;

		console.log(postData);
		console.log("post: " + endpoint);

		switch (endpoint) {
			case 'genSerial':
				let accid = autaccountid;
				let softId = postData.productId;
				if(accid)
					generateNewSerialKey(accid, softId, function (response) {res.json({key: response});});
				else
					res.json({msg: "Not logged in"});
				break;

			case 'logInn':
				let email = postData.email;
				let pass = postData.password;
				authenticate(email, pass, function (account, valid) {
					if (valid && account) {
						
						console.log("coooooooo")
						res.cookie("autkey", account.authenticationCode, {
							httpOnly: true,
							secure: true,
						});
						console.log("Cookie set");
						res.json({accountdata: account, success: "success"});
						
					} else {
						res.json({message: "Wrong password or email"});
					}
				});
				break;

			case 'signup':
				dbhandler.insertAccount(new dbhandler.Account(postData.firstName, postData.lastName, postData.email, postData.address, postData.postalCode, postData.password, postData.isProvider), function(account, valid){
					if (valid && account) {
						authenticate(account.email, account.password, function (account, valid) {
							if (valid && account) {
								
								console.log("coooooooo")
								res.cookie("autkey", account.authenticationCode, {
									httpOnly: true,
									secure: true,
								});
								console.log("Cookie set");
								res.json({accountdata: account, success: "success"});
								
							} else {
								sendErrorResponse("Error has occurred");
							}
						});
					} else {
						sendErrorResponse("Error has occurred");
					}

				});
				break;

			case "deleteLicense": dbhandler.deleteLicense(req.body.licenseID, function(success){if(success){res.json({success:true});} else{res.status(500).json({ success: false, message: 'Internal Server Error' });}}); break;
			case "getLicenseByAccount": dbhandler.getAccountFromEmail(req.body.email, (email, (account, success) => {
				if (success) {
				if (account) {
					dbhandler.getLicensesFromClientId(account.accountID, (licenses, valid) => {
					if (valid) {
						res.json({ success: true, licenses });
					} else {
						res.status(500).json({ success: false, message: 'Internal Server Error' });
					}
					});
				} else {
					res.json({ success: true, licenses: [] });
				}
				} else {
				res.status(500).json({ success: false, message: 'Internal Server Error' });
				}
			})); break;

			case "renewLicense": dbhandler.renewLicense(req.query.licenseID, function (newExpiryDate, success) {
				if (success) {
					res.json({ success: true, newExpiryDate });
				} else {
					res.status(500).json({ success: false, message: 'Internal Server Error' });
				}
			}); break;

			case "update-user-info": dbhandler.alterAccount(new dbhandler.Account(postData.firstName, postData.lastName, postData.email, postData.address, postData.postalCode, postData.password, postData.provider, autaccountid, account.authenticationCode), (success) => {
				if (success) {
					res.json({ success: true });
				} else {
					res.status(500).json({ success: false, message: 'Internal Server Error' });
				}
			}); break;
		
			case "deleteAccount": dbhandler.deleteAccount(autaccountid, function(account, success){
				if (success) {
					res.json({ success: true });
				} else {
					res.status(500).json({ success: false, message: 'Internal Server Error' });
				}
			}); break;

			case "blockSerial": dbhandler.getLicenseByNum(req.body.serialNumber, function(license, success){
				if(success && license){
					dbhandler.disableLicenseByLicenseId(license.licenseID, function(result, success){
						if (success) {
							res.json({ success: true });
						} else {
							res.status(500).json({ success: false, message: 'Internal Server Error' });
						}
					})
				}
				else{
					console.log("No SUCCCC");
					res.status(500).json({ success: false, message: 'License number doesnt exist' });
				}
			}); break;

			case "enableSerial": dbhandler.getLicenseByNum(req.body.serialNumber, function(license, success){
				if(success && license){
					dbhandler.enableLicenseByLicenseId(license.licenseID, function(result, success){
						if (success) {
							res.json({ success: true });
						} else {
							res.status(500).json({ success: false, message: 'Internal Server Error' });
						}
					})
				}
				else{
					console.log("No SUCCCC");
					res.status(500).json({ success: false, message: 'License number doesnt exist' });
				}
			}); break;

			case "assSerial": console.log(req.body.email); dbhandler.getAccountFromEmail(req.body.email, function(account, success){
				if(success && account){
					dbhandler.getLicenseByNum(req.body.serialNumber, function(license, success){
						if(success && license){
							license.clientOwnerID = account.accountID;
							dbhandler.alterLicenseWithoutExpiry(license, function(result, success){
								if (success) {
									res.json({ success: true });
								} else {
									res.status(500).json({ success: false, message: 'Internal Server Error' });
								}
							})
						}

						else{
							res.status(500).json({ success: false, message: 'Internal Server Error or license doesnt exist' });
						}
					})
				} else{
					console.log("Account doesnt exist");
					res.status(500).json({ success: false, message: 'Internal Server Error or account doesnt exist' });
				}
			}); break;
		}
	})
});

function sendErrorResponse(message, res) {
    res.json({message: message});
}

function generateNewSerialKey(accountId, softwareId, callback = function(){}){

	const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

  	const generateRandomNumbers = (count) => Array.from({ length: count }, () => getRandomInt(0, 10)).join('');
  	const generateRandomLetters = (count) => Array.from({ length: count }, () => String.fromCharCode(getRandomInt(65, 91))).join('');

  	const serialNumber = generateRandomNumbers(5) + generateRandomLetters(7) + generateRandomNumbers(3);

	let currentDate = new Date();
	const dateAfter30Days = new Date(currentDate);
	dateAfter30Days.setDate(currentDate.getDate() + 30);
	dbhandler.insertLicense(new dbhandler.License(softwareId, accountId, serialNumber, true), callback);

}

function generateNewAutKey(accountId, callback = function(){}){

	const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

  	const generateRandomNumbers = (count) => Array.from({ length: count }, () => getRandomInt(0, 10)).join('');
  	const generateRandomLetters = (count) => Array.from({ length: count }, () => String.fromCharCode(getRandomInt(65, 91))).join('');

  	const autNumber = generateRandomNumbers(7) + generateRandomLetters(7) + generateRandomNumbers(4);

	let currentDate = new Date();
	const dateAfter30Days = new Date(currentDate);
	dateAfter30Days.setDate(currentDate.getDate() + 30);
	dbhandler.getAccountById(accountId, function(account, valid){if(valid && account){account.authenticationCode = autNumber; dbhandler.alterAccount(account, callback)}});
}

function authenticate(email, password, callback = function(){}){
	dbhandler.getAccountFromEmail(email, function(account, valid){
		if(valid && account){
			if(password == account.password){
				//console.log(account);
				generateNewAutKey(account.accountID, callback);
			} 
			else {callback(null, false);}
		}
	});
}

var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("Your Licenses listening at http://%s:%s", host, port)
})