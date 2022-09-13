const request = require('request');

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/sports.json',
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

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "9fe359cfb0msh1529209e588a2a0p1c41b5jsn81f792d6947e",
//     "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
//   },
// };

// fetch("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming", options)
//   .then((response) => response.json())
//   .then((response) => {
//     let len =
//       response.typeMatches[2].seriesMatches[0].seriesAdWrapper.matches.length;
//     for (let i = 0; i < len; i++) {
//       console.log(
//         response.typeMatches[2].seriesMatches[0].seriesAdWrapper.matches[i]
//           .matchInfo
//       );
//     }
//   })
//   .catch((err) => console.error(err));