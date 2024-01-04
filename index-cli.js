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