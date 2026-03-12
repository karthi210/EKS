const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://mongodb:27017/todo")

const Task=mongoose.model("Task",{task:String})

app.get("/tasks",async(req,res)=>{

let tasks=await Task.find()

res.json(tasks)

})

app.post("/tasks",async(req,res)=>{

let t=new Task(req.body)

await t.save()

res.json(t)

})

app.listen(5000,()=>{
console.log("backend running")
})