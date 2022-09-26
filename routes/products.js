const express = require("express");

let router = express.Router();
const toys = require("../data/toys.json");


router
	.route("/toys")
	.get((req, res) => {
		res.json(toys);
	})
	.post((req, res) => {
		res.send("This POST request and  Url is /product/toys ...");
	});

router
	.route("/toys/:toyname")
	.get((req, res) => {
		res.send(`The toy is: ${req.params.toyname}`);
	})
	.put((req, res) => {
		res.send(`The toy ${req.params.toyname} updated!`);
	})
	.delete((req, res) => {
		res.send(`The toy deleted ${req.params.toyname}`);
	});

module.exports = router;

