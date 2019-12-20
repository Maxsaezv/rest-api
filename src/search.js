
const search = async (client, param) => {
  const resp = new Promise((resolve) => {
    client.get(param, (err, replay) => {
    //   console.log('param', param, 'replay', replay);
      if (replay === null) {
        resolve('404');
      }
      resolve(JSON.parse(replay));
    });
  });
  return resp;
};

module.exports = search;
