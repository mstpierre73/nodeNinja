const fs = require("fs");

//blocking code. It is synchronus, so node will read it all before moving to anything else. 
//Params are the file and caract encoder
let myfile = fs.readFileSync('readMe.txt', 'utf8');
console.log(myfile);

//params are the file we want to write, then the date to be written
const message = "Voici un texte à écrire dans un fichier qui n'est pas encore créé.";
fs.writeFileSync('writeMe.txt', message );
let myNewFile = fs.readFileSync('writeMe.txt', "utf8");
console.log(myNewFile);

//non-blocking code. Asynchronus method. It need a callback function to process  
fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log("Voici le texte récupéré: " + data);
    console.log("Nombre d'erreurs à la lecture: " + err);
});

const message2 = "Voici un paragraphe ajouté à la dernière minute.";
fs.writeFile('writeMe.txt', message2, (err) => {
    console.log("Nombre d'erreurs à l'écriture: " + err);
});

//creating files -- asynchronous version

fs.appendFile("dumb.txt", "Learning Node", function(err){
    if(err) throw err;
    console.log("dumb file created");
});

//deleting files --asynchonous version
fs.unlink('dumb.txt', (err) => {
    console.log("file removed");
    if(err){
        console.log(err);
    }
});

//synchronous version to create directory --blocking code
fs.mkdirSync("stuff");

//synchronous version to delete directory --blocking code
fs.rmdirSync("stuff");

//asynchronous version to create directory 
/*fs.mkdir("dumbo", function(){
    fs.readFile("readMe.txt", "utf8", function(err, data){
        fs.writeFile("./dummy/brandNew.txt", data, function(err){
            if(err) throw err;
            console.log("brandNew file created");
        });
    });
});*/

/*fs.rmdir("dumb", function(err){
    if(err) throw err;
    console.log("directory removed");
});*/

fs.unlink("./dummy/brandNew.txt", function(){
    console.log("file removed");
    fs.rmdir("dummy", function (err){
        if(err) throw err;
        console.log("directory removed");
    });
});




