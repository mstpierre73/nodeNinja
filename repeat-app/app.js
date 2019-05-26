//import packages
const express = require("express");
const app = express();

//Defining routes for home page
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment! I show this home page when everything works fine!");
});

//Defining routes for animals
app.get("/speak/:animals", function(req, res){
    let animals = req.params.animals;

    if(animals === "cat"){
        res.send("The " + animals + " says 'Meow Meow!'");
    } else if(animals === "dog"){
        res.send("The " + animals + " says 'Woof Woof!'");
    } else if(animals === "pig"){
        res.send("The " + animals + " says 'Oink Oink!'");
    } else if(animals === "cow"){
        res.send("The " + animals + " says 'Moo Moo!'");
    }
    else {
        res.send("I don't know what this " + animals + " his saying");
    }
    
});

//Defining routes for repeat
app.get("/repeat/:word/:number", function(req, res){
    let word = req.params.word;
    let number = Number(req.params.number);
    let message = "";
    for(let i= 0; i < number; i++){
        message += " " + word + " ";
    }
    res.send(message);
});

//Defining error 404 route
app.get("*", function(req, res){
    res.send("Sorry, page not found... Serving the error 404 page... What are you doing with your life?");
});

//Listening for the server
app.listen(process.env.PORT || 3000, function(){
    console.log("My own server is listening on port 3000");
});
