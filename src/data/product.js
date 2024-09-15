const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const product = sequelize.define('product', {
    productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productName: DataTypes.STRING,
    productPrice: DataTypes.INTEGER,
    productColor: DataTypes.STRING,
    productType: DataTypes.STRING,
    productDescription: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
});


(async () => {
    await sequelize.sync();
    console.log("table alterted");
})();
module.exports = product;