module.exports = {
    connect: async () => {
      console.log('Yhdistetty tietokantaan.');
    },
    findAll: async () => {
      console.log('Kaikki tiedot haettu.');
    },
    save: async (person) => {
      console.log('Tallennettu henkilö:', person);
    },
    delete: async (id) => {
      console.log('Poistettu henkilö ID:', id);
    },
    close: async () => {
      console.log('Tietokantayhteys suljettu.');
    }
  };
  