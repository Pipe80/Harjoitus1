
const readlineSync = require("readline-sync");

// Implement database.js!
const database = require("./database.js");

const displayCustomers = async () => {
  const customers = await database.findAll();
  console.log(customers);
};

const addCustomer = async () => {
  const name = readlineSync.question("Name?");
  console.log(name);
  const id = await database.save(name);
  console.log("saved with an id of " + id);
};

const removeCustomer = async () => {
  const id = readlineSync.questionInt("ID? ");
  await database.delete(id);
  console.log("Deleted with an id of " + id);
};
const exitApp = async () => {
  console.log("Exiting application.");
  await database.close();
  process.exit();
};

const displayMenu = () => {
  console.log("\nCustomer App Menu:");
  console.log("1. Display Customers");
  console.log("2. Add Customer");
  console.log("3. Remove Customer");
  console.log("4. Exit\n");
};

/**
 * The main function of the application.
 */
const main = async () => {
  try {
    let running = true;
    while (running) {
      displayMenu();
      const choice = readlineSync.question("Choose an option: ");
      switch (choice) {
        case "1":
          await displayCustomers();
          break;
        case "2":
          await addCustomer();
          break;
        case "3":
          await removeCustomer();
          break;
        case "4":
          running = false;
          break;
        default:
          console.log("Invalid option.");
      }
    }
    exitApp();
  } catch (error) {
    console.error("Error during main application execution:", error);
  }
};

main();