
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

//find way to delete this later, lots of security issues with disabling SSL verification 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const app = express();
//Change
const PORT = 3002; 

app.use(express.json());
url = 'https://sjsuparkingstatus.sjsu.edu/'
let parkingData = [];

async function updateParkingData() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    $(".garage").each(function () {
      const garageText = $(this).find(".garage__text").text().trim();
      const garageData = garageText.split(/(\w+)\s*%+/);

      for (let i = 0; i < garageData.length; i += 2) {
        const name = garageData[i].trim();
        const fullness = garageData[i + 1] ? parseInt(garageData[i + 1].trim(), 10) / 100 : undefined;

        if (name !== ''){
          parkingData.push({
            name,
            fullness,
          });
        }
    }
    });

    console.log('Parking data updated successfully:', parkingData);
  } catch (error) {
    console.error(error);
  }
}

// Fetch parking data initially and update it every 5 minutes
//Adjust this later, when it fetches data the 2nd time  it will mess up the app home screen because there are
//8 instances instead of 4, and etc everytime it refreshes 
updateParkingData();
///setInterval(updateParkingData, 5 * 60 * 1000);

app.get('/', (req, res) => {
  res.json(parkingData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
