const express=require("express");
const router=express.Router();
let students=require("C:\Users\Naysha\OneDrive\Desktop\Web3\Assignment 2\data\students.js");
router.get("/",(req,res)=>res.json(students));
//getting specific student by id (GET)
router.get(":id",(req,res)=>{
    const student=students.find(s=>s.id==req.params.id);
    student ? res.json(student) : res.status(404).json({ error: "Student not found" });
});
//adding a new student(POST)
router.post(":/id",(req,res)=>{
    const name=req.body;
    if (!name) return res.status(400).json({error:"Name required"});
    const newStudents={id:students.length+1,name};
    students.push(newStudent);
    res.status(201).json("Student added successfully",newStudent);
});
//updating student name(PUT)
router.put(":/id",(req,res)=>{
    const student=students.find(s=>s.id==req.params.id);
    if (!student) return res.status(404).json({error:"Student not found"});
    const updatedStudent=req.body.name;
    students[id]=updatedStudent;
    res.status(201).json("Name updated successfully",updatedStudent);
});
router.delete("/:id",(req,res)=>{
    const student=students.find(s=>s.id==req.params.id);
    if(!student) return res.status(404).json({erro:"Student not found"});
    students.splice(index,1);
    res.status(201).json("Student removed successfully");
});
module.exports=router;
