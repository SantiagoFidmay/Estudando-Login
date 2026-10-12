const { Sequelize } = require('sequelize')

const db = new Sequelize('db_bike_teste','root','Mibuenaonda1@',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = db