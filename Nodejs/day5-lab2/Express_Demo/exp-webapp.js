const express =  require('express');

const app = express();
const port = 3000;

app.get('/', function (req,res){
    res.status(200).send(`<h1>Home Page</h1>
    <h1> Welcome from Express! </h1>
    <h3> Fast, Unopinionated, Minimalist Web Framework</h3>
    <a href="/api">APIs</a><br>
    <a href="/performance">Performance</a><br>
    <a href="/frameworks">Frameworks</a>
    `);
})

app.get('/api', function (req,res){
    res.send(`<h1>APIs</h1>
    <p>With a myriad of HTTP utility methods and middleware at your disposal,
    creating a robust API is quick and easy.</p>
    <a href='/'>Go to Home Page</a>
    `); 
})

app.get('/performance', function (req,res){
    res.send(`<h1>Performance</h1>
    <p>Express provides a thin layer of fundamental web application features, without
    obscuring Node.js features that you know and love.</p>
    <a href='/'>Go to Home Page</a>
    `); 
})

app.get('/frameworks', function (req,res){
    res.send(`<h1>Frameworks</h1>
    <a href="http://expressjs.com/en/resources/frameworks.html
    ">Follow Link</a>
    
     <li>Feathers: Build prototypes in minutes and production ready real-time apps in days</li>
     <li>ItemsAPI: Search backend for web and mobile applications built on Express and Elasticsearch.</li>
     <li>KeystoneJS: Website and API Application Framework / CMS with an auto-generated React.js Admin UI.</li>
     <li>Poet: Lightweight Markdown Blog Engine with instant pagination, tag and category views.</li>
     <li>Kraken: Secure and scalable layer that extends Express by providing structure and convention.</li>
     <li>LoopBack: Highly-extensible, open-source Node.js framework for quickly creating dynamic end-to-end REST APIs.</li>
     <li>Sails: MVC framework for Node.js for building practical, production-ready apps.</li>
     <li>Hydra-Express: Hydra-Express is a light-weight library which facilitates building Node.js Microservices using ExpressJS.</li>
     <li>Blueprint: a SOLID framework for building APIs and backend services</li>
     <li>Locomotive: Powerful MVC web framework for Node.js from the maker of Passport.js</li>
     <li>graphql-yoga: Fully-featured, yet simple and lightweight GraphQL server</li>
     <li>Express Gateway: Fully-featured and extensible API Gateway using Express as foundation</li>
     <li>Dinoloop: Rest API Application Framework powered by typescript with dependency injection</li>
     <li>Kites: Template-based Web Application Framework</li>
     <li>FoalTS: Elegant and all-inclusive Node.Js web framework based on TypeScript.</li>
     <li>NestJs: A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications on top of TypeScript & JavaScript (ES6, ES7, ES8)</li>    
     <li>Expressive Tea: A Small framework for building modulable, clean, fast and descriptive server-side applications with Typescript and Express out of the box.</li>
     <a href='/'>Go to Home Page</a>
     `); 
})


app.all('*' , function(req,res){
    res.status(404).send(`
    <h1>Oops!!!</h1>
    <p>Page NOT found....</p>
    <a href='/'>Home</a>
    `);
})

app.listen(port, function(){
    console.log(`Express app listening at port ${port}.....`);
})


// const express =  require('express');

// const app = express();
// const port = 3000;

// app.get('/', function (req,res){
//     res.status(200).send('<h1>Home Page</h1>');
// })

// app.get('/about', function (req,res){
//     res.send('<h1>About Page</h1>'); 
// })

// app.all('*' , function(req,res){
//     res.status(404).send(`
//     <h1>Oops!!!</h1>
//     <p>Page NOT found....</p>
//     <a href='/'>Home</a>
//     `);
// })

// app.listen(port, function(){
//     console.log(`Express app listening at port ${port}.....`);
// })

