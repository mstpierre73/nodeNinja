//import packages
const express = require("express");

//Defining routes for home page
app.get("/", function(req, res){
    res.send("Here is the text to show when it work");
});

//Defining routes for animals


//Defining routes for repeat


//Defining error 404 route


//Listening for the server
app.listen(3000, function(){
    console.log("The server is listening on port 3000");
});
