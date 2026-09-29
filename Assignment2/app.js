const express=require("express");
const logger=require("C:\Users\Naysha\OneDrive\Desktop\Web3\Assignment 2\middleware\logger.js");
const studentRoutes=require("C:\Users\Naysha\OneDrive\Desktop\Web3\Assignment 2\routes\studentRoutes.js");
const app=express();
app.use(express.json());
app.use(logger);
app.use("/students",studentRoutes);
app.use((req,res)=>{
    res.status(404).json({error:"Not found"});
});
app.listen(3000,()=>console.log("Server running at 3000 port"));
