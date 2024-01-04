const express = require('express');
const app = express();
const port = 3000;

const customers = [
  { id: 1, name: 'Eini' },
  { id: 2, name: 'Paula' }
];

app.get('/', (req, res) => {
  res.send('Tervehdys pakkasmaailma!');
});

// Hae kaikki asiakkaat
app.get('/api/customers', (req, res) => {
  res.json(customers);
});

// Lisää uusi asiakas
app.post('/api/customers', (req, res) => {
  // Lisää asiakas tietokantaan
  const newCustomer = { id: customers.length + 1, name: 'New Customer' };
  customers.push(newCustomer);
  res.json(newCustomer);
});

// Poista asiakas id:n perusteella
app.delete('/api/customers/:id', (req, res) => {
  const { id } = req.params;
  // Etsi asiakas ja poista se
  const deletedCustomerIndex = customers.findIndex(customer => customer.id === parseInt(id));
  if (deletedCustomerIndex !== -1) {
    const deletedCustomer = customers.splice(deletedCustomerIndex, 1);
    res.json(deletedCustomer);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

// Hae asiakas id:n perusteella
app.get('/api/customers/:id', (req, res) => {
  const { id } = req.params;
  // Etsi asiakas id:n perusteella
  const customer = customers.find(customer => customer.id === parseInt(id));
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
