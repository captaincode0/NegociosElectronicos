/*
  @authors:
  		-Diego Alberto De Santiago Ruiz {captaincode0}.
  		-Diego Becerra Rodríguez.
  		-Elizabeth González.
  	SinHambre Platform writen in node.js with express
 ____    ______   __  __  __  __  ______           ____     ____    ____      
/\  _`\ /\__  _\ /\ \/\ \/\ \/\ \/\  _  \  /'\_/`\/\  _`\  /\  _`\ /\  _`\    
\ \,\L\_\/_/\ \/ \ \ `\\ \ \ \_\ \ \ \L\ \/\      \ \ \L\ \\ \ \L\ \ \ \L\_\  
 \/_\__ \  \ \ \  \ \ , ` \ \  _  \ \  __ \ \ \__\ \ \  _ <'\ \ ,  /\ \  _\L  
   /\ \L\ \ \_\ \__\ \ \`\ \ \ \ \ \ \ \/\ \ \ \_/\ \ \ \L\ \\ \ \\ \\ \ \L\ \
   \ `\____\/\_____\\ \_\ \_\ \_\ \_\ \_\ \_\ \_\\ \_\ \____/ \ \_\ \_\ \____/
    \/_____/\/_____/ \/_/\/_/\/_/\/_/\/_/\/_/\/_/ \/_/\/___/   \/_/\/ /\/___/ 
                                                                              
 */

//require express framework
var express = require("express");

//build the application with one instance of express framework
var app = express();

//get one session from express framework
var ExpressSession = require("express-session");

//get the body parser to build and iterate middleware
var bodyParser = require("body-parser");

//get the cookie parser to control user cookies
var cookieParser = require("cookie-parser");

var path = require("path");

/**
 * captaincode0 libraries and modules
 */

//require the application configurator
var appconfigurator = require("./SystemVariables");

//configure the application
(function(secret_key, template_eng, views_dir){
	app.locals.appname = "Sin Hambre Web Application";
	app.locals.depndencies = "connect-sqlite3 express express-session jade body-parser cookie-parser";
	app.locals.authors = "@captaincode0, @bcr237, ely g.";
	app.locals.version = "0.0.1";

	//enable the view directory
	app.set("views", __dirname+views_dir);
	//set the template engine
	app.set("view engine", template_eng);
	//enable application parsers
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(cookieParser());
	app.use(ExpressSession({
		secret: secret_key,
		resave: true,
		cookie: {
			maxAge: 72*3600*1000 //3 days
		},
		saveUninitialized: true
	}));
})(
	"f4d5d372-8354189d-1cf028c2-c7477816", 
	"jade", 
	"/views"
);

//set middleware for static files
app.use("/assets/",express.static(path.join(__dirname+"/views/assets")));

//index route
app.use("/", require(appconfigurator.APP_ROUTES+"index"));

app.listen(appconfigurator.APP_PORT, function(){
	if(appconfigurator.APP_DEBUG){
		console.log("[+] Running the server");
		console.log("[+] "+app.locals.appname);
		console.log("[+] Authors: "+app.locals.authors);
		console.log("[+] Version: "+app.locals.version);
		console.log("[+] Port: "+appconfigurator.APP_PORT);
	}
});