/*var count=34;
count++;
console.log("Server is running");
console.log(count);


//CTL + SHIFT + C   

*/

var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Name : Rutuja Sanket Lembhe  Roll No.: 21915");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso Company</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Contoso is a multinational Company</li>"+
                    " <li>They have their 12 offices all over world</li>"+
                    " <li>This is public application for Contoso</li>"+
                    
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
// if external packages are required
// we have to download those packages from internet using  package manager tool
// Runtime--------tools-------------packages-----------------------config file
// Java-----------maven--------------.jar files----------------------pom.xml
// Android--------graddle------------android jar file----------------pom.xml
// Python---------pip----------------Python libraries----------------
// .NET ---------Nugget--------------dll files-----------------------package.config
// NodeJS----------npm --------------download node modules-----------package.json 