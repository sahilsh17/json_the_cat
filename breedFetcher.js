const request = require('request');
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
const name = process.argv.slice(2);

request(url + name, (error, response, body) => {
  
  console.log('status code:', response && response.statusCode);
  if (error) { 
    console.log(error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("breed not found");
    } else {
      console.log(data[0]['description']);
    }
  }
});