const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new Product
exports.create = (req, res) => {

    // Validate request
    if (!req.body.product_vendor) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Product
    const product = {
        product_code: req.body.product_code,
        product_vendor: req.body.product_vendor,
        product_brand: req.body.product_brand,
        product_ref: req.body.product_ref,
        product_color_code: req.body.product_color_code,
        product_color_name: req.body.product_color_name,
        product_size: req.body.product_size,
        product_gender: req.body.product_gender,
        product_material: req.body.product_material,
        product_type: req.body.product_type,
        product_style: req.body.product_style,
        product_avail: req.body.product_avail,
        product_booked: req.body.product_booked,
    };

    // Save Product in the database
    Product.create(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Product."
            });
        });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    Product.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};
