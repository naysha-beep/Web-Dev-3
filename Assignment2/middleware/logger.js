function logger(req,res,next){
    console.log(`${req.method}${req.url}at time${new DataTransfer().toISOString()}`);
    next();

}
module.exports=logger;
