/*
const sum = (num1, num2) => {

    return num1 + num2;
}

const result = sum(2,3);

console.log(result);
*/

/*
generating file in data.txt after putting node index.js in terminal

const fs = require('fs');

const generatorFile= ()=> {
    try{
        fs.writeFileSync('data.txt', "Hi, this file was made with Node");
    } catch(err){
        console.log(err);
    }
}

generatorFile();
*/

/*
creating server 

const http = require('http');
http.createServer(function(req, res){
    res.write('Server started. Hi!');
    res.end
}).listen(8080);

*/

//export file in another file

/*
const myModule = require('./my-module');

const date = myModule();

console.log(date);
*/

//requiring express
const express = require('express');

//initializing express app
const app = express();

//specifying a port to listen on localhost:9000
const port = 9000;

//API /urls. Request and response 
app.get('/', (req, res) =>{
    res.send("Hi from the express server!");
});

app.get('/api/cats', (req, res)=>{
    
    //call to database

    //return dummy data
    const cats = ["British Shorthair", "Ragdoll", "RussianBlue"];

    //sending a response in JSON
    res.send(JSON.stringify(cats));
});

//running the express http server on the port we specified 
app.listen(port, () => {
    console.log("Listening on port", port);
});



