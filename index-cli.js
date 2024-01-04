const main = async () => {
    try {
      await database.connect();
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
  1:12
  readline-sync pitää "importoida" ja asentaa:
  const readlineSync = require("readline-sync");
  1:13
  ja komentoriviltä
  npm install readline-sync
  
  
  Jussi Pohjolainen
    1:40 PM
  Eka tehtävässä olisi tarkoitus saada vain järkevä UI jossa käyttäjä voisi operoida tietokannan kanssa. Tässä kohtaa vielä ei tarvitse tietokantaoperaatioita toteuttaa. Toteutus voisi esim olla:
  const readlineSync = require("readline-sync");
  /**
   * Displays all customers in the database.
   */
  const displayCustomers = () => {
    console.log("display all customers");
  };
  
  /**
   * Adds a new customer to the database.
   */
  const addCustomer = () => {
    const name = readlineSync.question("Name? ");
    if (!name.trim()) {
      console.log("Name cannot be empty.");
      return;
    }
    let customer = { name };
    console.log("Save customer: ", JSON.stringify(customer));
  };
  
  /**
   * Removes a customer from the database by ID.
   */
  const removeCustomer = () => {
    const id = readlineSync.questionInt("ID? ");
    console.log("remove customer with id " + id);
  };
  
  /**
   * Exits the application.
   */
  const exitApp = () => {
    console.log("Exiting application.");
    process.exit();
  };
  
  /**
   * Displays the main menu.
   */
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
  const main = () => {
    try {
      let running = true;
      while (running) {
        displayMenu();
        const choice = readlineSync.question("Choose an option: ");
        switch (choice) {
          case "1":
            displayCustomers();
            break;
          case "2":
            addCustomer();
            break;
          case "3":
            removeCustomer();
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