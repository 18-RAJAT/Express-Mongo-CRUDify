const express=require('express');
const app=express();
const mongoose=require('mongoose');
//routes
app.get('/',(req,res)=>{
    res.send('Hello World');
});

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://Rajat35:Rajat35@api-node.aqccrto.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000,()=>{
        console.log('server is running on port 3000');
    });
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
});