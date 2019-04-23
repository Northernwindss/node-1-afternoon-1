const express = require('express')
const getProducts = require(`../server/getProducts`)
const getProduct = require(`./getProducts`)

const app = express()
const port = 4444;

app.get(`/api/products`, getProducts);
app.get(`/api/products/:id`, getProducts)



app.listen(port, () => {
  console.log(`breathe in, breathe out ${port}`);
});