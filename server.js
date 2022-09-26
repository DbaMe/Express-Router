const express = require("express");
const products = require("./routes/products.js");


const port = 6000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send('Express router');
});

app.use("/products", products);


app.listen(port, () => console.log(`Server is running on ${port}`));
