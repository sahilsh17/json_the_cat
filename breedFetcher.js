const request = require('request');
const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, response, body) => {
   
    if (error) { 
      console.log(error);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("breed not found");
      } else {
        
        return callback(null,data[0]['description']);
      }
    }
  });
};

module.exports = {fetchBreedDescription};
