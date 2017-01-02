/**
 * @authors:
 * 		-Diego Alberto De Santiago Ruiz {captaincode0}.
 * 		-Diego Becerra Rodríguez.
 * 		-Elizabeth González.
 * 	SinHambre Platform writen in node.js with express
 */

//require express framework
var express = require("express");
//build the application
var app = express();
//set the views directory
app.set("views", "./views");
app.set("view engine", "jade");

//require the application configurator
var appconfigurator = require("./SystemVariables.js");

app.get("/", function(request, response){
	response.render("index", {youAreUsingJade: true});
});


app.listen(8080, function(){
	if(appconfigurator.APP_DEBUG){
		console.log("[+] Running the server");
		console.log("[+] Sin Hambre Web Application");
		console.log("[+] Port: 8080");
	}
});