const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const expenses =sequelize.define('expenses',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Expenses:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    Description:{
        type:Sequelize.STRING,
        allowNull:false
    }, 
    Category:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=expenses;