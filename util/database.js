const Sequelize =require('sequelize');

const sequelize=new Sequelize('expensive-track','root','root',{
    dialect:'mysql',
    host: 'localhost',
})

module.exports=sequelize;