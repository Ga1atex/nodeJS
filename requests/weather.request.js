const rp = require('request-promise');

module.exports = async function (city = '') {
  if (!city) {
    throw new Error('Имя города не может быть пустым');
  }

  const KEY = 'fd40879a40afd43f288e202cd0d886f2';
  const uri = 'http://api.openweathermap.org/data/2.5/weather';

  const options = {
    uri,
    qs: {
      appid: KEY,
      q: city,
      units: 'metric'
    },
    json: true
  };

  try {
    const data = await rp(options);
    console.log(data);

    return {
      weather: `${data.name}: ${data.main.temp.toFixed(0)}`,
      error: null
    };
  } catch (error) {

    return {
      weather: null,
      error: error.error.message
    };
  }
};