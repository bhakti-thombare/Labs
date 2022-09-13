const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end(
      `<h1>Blazeclan Technologies</h1>
      <img src='https://www.blazeclan.com/wp-content/uploads/2019/03/logo.png' alt='logo' />
      <br>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      `
   
      );
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end(`
    <h1>Our Mission</h1>
    
    <p class="icon-text-body mr-4">We are on a revolutionary path of leading excellence on cloud; 
    by offering robust yet dynamic cloud technology to leverage our capabilities of 
    providing business flexibility, reduced operational costs, decreased time to market, 
    and the security and scalability of enterprise workloads for our valuable customers.</p>

    <h1>Our Vision</h1>
    <p class="icon-text-body mr-4">We envision becoming a global leader in Cloud Consultancy through our invaluable and trustworthy customer service and experience.</p>
    
    <a href="/">Home</a>
    <a href="/contact">Contact</a>
    `);
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end(
      `<div> 
      <h3>Address: </h3>
      <h3">Blazeclan Technologies</h3>
      <p>Godrej Eternia C, A-Wing, 8th Floor, <br>Old Pune-Mumbai Rd, Wakadewadi, Shivajinagar, Pune, Maharashtra 411005</p>
      <p>Contact: 020-67611100
      <span style="font-weight: var( --e-global-typography-text-font-weight );"><br>
      Email: info@blazeclan.com</span></p>
      
      </div>
      <a href="/about">About</a>
      <a href="/">Home</a>
      `);
  } else {
    const error = (res.statusCode = 404);
    res.end(`<h1>Oopss!! Page Not Found : ${error}</h1>`);
  }
});

server.listen(4000, () => {
  console.log(`Server Running  at port 4000`);
});