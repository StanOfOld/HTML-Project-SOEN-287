const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const dbhandler = require('./dbhandler');

const publicPath = path.join(__dirname, 'Public');

console.log("isit")

app.use(express.static(publicPath));

app.get('/:filename', function (req, res) {
	
	var filename = path.join(publicPath, req.params.filename);

	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		} 
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});

	
});

//console.log("sejse");
//dbhandler.insertAccount(new dbhandler.Account("dlo", "fdjs", "fjs@gmail.com", "2192 3rd ve", "yuw4s1", "defre"));
//dbhandler.alterAccount(new dbhandler.Account("pid", "fjew", "daa@gmail.com", "daudh", "dsuds", "fesufb", false, 14));
//dbhandler.insertSoftware(new dbhandler.Software(9, "Ghu", "Graphic", "Lorem Ipsum", "3", "3.99"));
//dbhandler.insertLicense(new dbhandler.License(4, 14, "dsids"));

function display(result, valid){
	console.log(result);
}
  
dbhandler.getAccountById(14, display);


var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	
	console.log("Example app listening at http://%s:%s", host, port)
 })