//find way to delete this later, lots of security issues with disabling SSL verification 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://sjsuparkingstatus.sjsu.edu/";
const parkingData = [];

async function getParking() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    $(".garage").each(function () {
        const garageName = $(this).find(".garage__name").text();
        const garageText = $(this).find(".garage__text");
  
        const garageFullness = garageText.find(".garage__fullness").text();
  
        parkingData.push({
          name: garageName.trim(), 
          fullness: garageFullness.trim(), 
        });
      });

    console.log(parkingData);
  } catch (error) {
    console.error(error);
  }
}

getParking();

