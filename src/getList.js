const axios = require('axios');

const getList = async () => {
  const page = 1;
  const { data } = await axios.get(`https://swapi.co/api/starships/?page=${page}`);
  const { results } = data;


  console.log('result', results);
  return results;
};


module.exports = getList;
