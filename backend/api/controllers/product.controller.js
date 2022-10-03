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
                    err.message || "Some error occurred while retrieving products."
            });
        });
};
// Find a single Product with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Product with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Product with id=" + id
            });
        });
};
// Update a Product by the id in the request
exports.update = (req, res) => {

};
// Delete a Product with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Products from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Products
exports.findAllPublished = (req, res) => {

};
