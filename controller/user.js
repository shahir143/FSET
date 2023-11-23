const User=require('../model/user');

exports.saveData=async(req,res,next)=>{
    try{
        const data=await User.create({
            Expenses: req.body.Expenses,
            Description: req.body.Description, 
            Category: req.body.Category
        })
        res.status(201).json({data})
    }catch(error){
        res.status(500).json({error: 'Error in saving the data'})
    }
}
exports.deleteData=async(req,res,next)=>{
    try{
        const id=req.params.id;
        await User.destroy({where:{id:id}});
        res.status(201).json({message:"deleted successfully"});
    }catch(error){
        res.status(500).json({error:"deleted failed"});
    }
}
exports.getData=async(req,res,next)=>{
    try{
        const dbData = await User.findAll()
        const data = dbData.map(data => data.dataValues);
        res.status(201).json(data);
    }catch(error){
        res.status(500).json({error: 'Error in getting the data'})
    }
}