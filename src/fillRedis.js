const fillRedis = (client, ships) => {
  ships.forEach((ship) => {
    const { name } = ship;
    client.set(name, JSON.stringify(ship));
  });
  return ships;
};

module.exports = fillRedis;
