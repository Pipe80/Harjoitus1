const database = require("./database.js");

const main = async () => {
  await database.connect();
  await database.findAll();
  await database.save({ id: 1, name: "John Doe" });
  await database.delete(1);
  await database.close();
};

main();
