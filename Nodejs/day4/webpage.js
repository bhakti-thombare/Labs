const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end(`<h1>Welcome to HOME Page! </h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SeGhNhWjEFVs5tM9bYuq_vyucq7NlObQaWbL8zzV&s"><br>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        `);
    }
    else if(req.url === '/about'){
        res.end(`<h1>About....!</h1>
        <h2>Mission</h2>
        <p>We are on a revolutionary path of leading excellence on cloud; 
        by offering robust yet dynamic cloud technology to leverage our capabilities of 
        providing business flexibility, reduced operational costs, decreased time to market, 
        and the security and scalability of enterprise workloads for our valuable customers.</p>
        <h2>Vision</h2>
        <p>We envision becoming a global leader in Cloud Consultancy through our invaluable and trustworthy customer service and experience.</p>
        <a href ="/">Home</a>
        `);
    }
    else if(req.url === '/contact'){
        res.end(`<h1>Contact....!</h1>
        <h3>Address</h3>
        <p>Godrej Eternia, A-Wing, 8th Floor, C, Old Mumbai Rd, Wakadewadi, Shivajinagar, Pune, Maharashtra 411005</p>
        <h3>URL</h3>
        <p>https://www.blazeclan.com/</p>
        <h3>Email Address</h3>
        <p>info@blazeclan.com</p>
        <h3>Phone Number</h3>
        <p>+91 20 6529 0035</p>
        <a href ="/">Home</a>
        `);
    }

    else{
        res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page you are looking for</p>
        <a href ="/">Home</a>
        `)
    }
})

server.listen(8000, () =>{
    console.log("Server Running at port 8000...");
});