//import packages
const express = require("express");

//Defining routes for home page
app.get("/", function(req, res){
    res.send("Here is the text to show when it work");
});

//Defining routes for animals
app.get("/animals", function(req, res){
    let animals = req.params.animals;
    res.send("Send the appropriate noise following the animal");
})

//Defining routes for repeat
app.get("/repeat/word/number", function(req, res){
    let word = req.params.word;
    let number = req.params.number;
    res.send("Send the appropriate word, the number of times required");
})

//Defining error 404 route
app.get("*", function(req, res){
    res.send("Serving the error 404 page");
})

//Listening for the server
app.listen(3000, function(){
    console.log("My own server is listening on port 3000");
});
