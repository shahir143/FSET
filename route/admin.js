const express=require('express');
const route=express.Router();
const controllerRouter=require('../controller/user');

route.get('/data',controllerRouter.getData);
route.post('/save-data',controllerRouter.saveData);
route.delete('/delete-data/:id',controllerRouter.deleteData);

module.exports=route;