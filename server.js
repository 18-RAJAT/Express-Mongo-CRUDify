const express=require('express');
const app=express();
const Product = require('./models/productModel')
const mongoose=require('mongoose');
//middleware
app.use(express.json());

//routes
app.get('/',(req,res)=>{
    res.send('Hello World');
});


app.post('/products',async(req,res)=>{
    try
    {
        const product=await Product.create(req.body);
        res.status(200).json(product);
    }
    catch(error)
    {
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
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