const request = require('request');

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  qs: {q: 'London'},
  headers: {
    'X-RapidAPI-Key': '59165ec826mshf108b3e85648a24p16b2b2jsnf98d7ebc2906',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);

});