const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const dbhandler = require('./dbhandler');
const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, 'Public');

console.log("isit")

app.use(express.static(publicPath));

app.use(bodyParser.json()); // Parse JSON in the request body
app.use(bodyParser.urlencoded({ 
    extended:false
})); 

/*app.get('/getData', (req, res) => {
	// Use dbhandler to fetch data
	dbhandler.getSoftwareList(1, 10, null, false, (softwareList, valid) => {
	  if (valid) {
		res.json(softwareList); // Send data as JSON
	  } else {
		console.log("invalid");
		res.status(500).send('Internal Server Error');
	  }
	});
});*/

app.get('/', function (req, res) {
    res.redirect("/home");
});

app.get('/:route', function (req, res) {

	var route = req.params.route;
	var displayhtml = function(err, data){
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		} 
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	};
	var readhtml = (htmlfile) => {fs.readFile(path.join(publicPath, htmlfile), displayhtml)};

	var getdata = function(data, valid){
		if (valid) {
			res.json(data);
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

		case "getSoftwareList": dbhandler.getSoftwareList(req.query.page || 1, 10, req.query.genre || null, req.query.search || null, getdata); break;
        case "getSoftware": if(req.query.id){dbhandler.getSoftwareById(req.query.id, getdata);}; break;
		case "getTopSoftware": dbhandler.getTopDownloadedSoftware(getdata); break;
	}
});

app.post('/:endpoint', function (req, res) {
    // Ensure this route only handles POST requests
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const endpoint = req.params.endpoint;
    const postData = req.body;

	console.log(postData);

    switch (endpoint) {
        case 'genSerial':
            res.json({ message: 'Handled POST request for genSerial' });
            break;

        case 'example2':
            // Handle POST request for 'example2' endpoint
            // Your logic here
            res.json({ message: 'Handled POST request for example2' });
            break;

        // Add more cases as needed

        default:
            res.status(404).json({ error: 'Endpoint not found' });
            break;
    }
});

//console.log("sejse");
//dbhandler.insertAccount(new dbhandler.Account("dlo", "fdjs", "fjs@gmail.com", "2192 3rd ve", "yuw4s1", "defre"));
//dbhandler.insertAccount(new dbhandler.Account("pid", "fjew", "daa@gmail.com", "daudh", "dsuds", "fesufb"));
/*dbhandler.insertSoftware(new dbhandler.Software(19, "Ghu", "Graphic", "Lorem Ipsum", "3", "3.99"));
dbhandler.insertSoftware(new dbhandler.Software(19, "gsdg", "Graphic", "Lorem vsdgfs", "3", "3.99"));
dbhandler.insertSoftware(new dbhandler.Software(19, "Ghfsfu", "Graphic", "Lorem vsfdvg", "3", "3.99"));
dbhandler.insertSoftware(new dbhandler.Software(19, "adsa", "Graphic", "Lorem vfsdg", "3", "3.99"));
dbhandler.insertSoftware(new dbhandler.Software(19, "adsa", "Utility", "Lorem Ipsum", "3", "3.99"));
dbhandler.insertSoftware(new dbhandler.Software(19, "adsa", "Graphic", "Lorem Ipsum", "3", "3.99"));
dbhandler.insertSoftware(new dbhandler.Software(19, "adsa", "Utility", "Lorem  gf", "3", "3.99"));
dbhandler.insertSoftware(new dbhandler.Software(19, "dhdg", "Graphic", "Lorem vdster", "3", "3.99"));
dbhandler.insertSoftware(new dbhandler.Software(19, "hqevs", "Utility", "Lorem vsg", "3", "3.99"));
dbhandler.insertSoftware(new dbhandler.Software(19, "njtr", "Graphic", "Lorem svr", "3", "3.99"));
dbhandler.insertSoftware(new dbhandler.Software(19, "wrtt", "Utility", "Lorem yiky", "3", "3.99"));*/
//dbhandler.insertLicense(new dbhandler.License(4, 14, "dsids"));

/*function display(result, valid){
	console.log(result);
}
  
dbhandler.getAccounts(false, display);*/

var tries = 0;
function generateNewSerialKey(accountId, softwareId){

	//const newLicense = 

	if(tries < 100){
		dbhandler.existLicenseBySerialNum();
		tries++;
	}

}

function generateSerialKeyCallback(data, valid, serialNum = null){

	if(valid && data == null){
		let currentDate = new Date();
		const dateAfter30Days = new Date(currentDate);
		dateAfter30Days.setDate(currentDate.getDate() + 30);
		dbhandler.insertLicense(new dbhandler.License(0, /*Change this after aut*/1, serialNum, true, `${currentDate.getFullYear}-${currentDate.getMonth + 1}-${currentDate.getDay}`, `${dateAfter30Days.getFullYear}-${dateAfter30Days.getMonth + 1}-${dateAfter30Days.getDay}`), callback);
	}

	else{
		generateNewSerialKey(++tries);
	}
}

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	
	console.log("Your Licenses listening at http://%s:%s", host, port)
})