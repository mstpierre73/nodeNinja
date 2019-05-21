const events = require("events");

/*let myEmitter = new events.EventEmitter();
myEmitter.on("someEvent", function(message){
    console.log(message);
})

myEmitter.emit("someEvent", "The event was emitted");*/

const util = require("util");
let Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

let James = new Person("James");
let Mary = new Person("Mary");
let Ruy = new Person("Ruy");
let people = [James, Mary, Ruy];

people.forEach(function(person){
    person.on("speak", function(message){
        console.log(person.name + " said: " + message);
    });
});

James.emit("speak", "Hey dudes!");
Ruy.emit("speak", "I want a curry");

