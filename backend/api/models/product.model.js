const {DataTypes} = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_vendor: {
            type: DataTypes.STRING
        },
        product_brand: {
            type: DataTypes.STRING
        },
        product_ref: {
            type: DataTypes.STRING
        },
        product_color: {
            type: DataTypes.STRING
        },
        product_size: {
            type: DataTypes.STRING
        },
        product_gender: {
            type: DataTypes.STRING
        },
        product_material: {
            type: DataTypes.STRING
        },
        product_type: {
            type: DataTypes.STRING
        },
        product_style: {
            type: DataTypes.STRING
        },
        product_avail: {
            type: DataTypes.INTEGER
        },
        product_booked: {
            type: DataTypes.INTEGER
        },
    });
    return Product;
};
