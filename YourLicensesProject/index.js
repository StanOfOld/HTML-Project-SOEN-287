const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const dbhandler = require('./dbhandler');

const publicPath = path.join(__dirname, 'Public');

console.log("isit")

app.use(express.static(publicPath));

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




var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	
	console.log("Your Licenses listening at http://%s:%s", host, port)
})