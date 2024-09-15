const { Sequelize } = require('sequelize')
const awsParamStore = require('aws-param-store')

var name = awsParamStore.getParameterSync(process.env.DB_NAME, { region: process.env.region }).Value;
var user = awsParamStore.getParameterSync(process.env.DB_USER, { region: process.env.region }).Value;
var password = awsParamStore.getParameterSync(process.env.DB_PASSWORD, { region: process.env.region }).Value;
var host = awsParamStore.getParameterSync(process.env.DB_HOST, { region: process.env.region }).Value;
var port = awsParamStore.getParameterSync(process.env.DB_PORT, { region: process.env.region }).Value;

const sequelize = new Sequelize(
    name,
    user,
    password,
    {
        dialect: 'mysql',
        host,
        port
    }
)
try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;

