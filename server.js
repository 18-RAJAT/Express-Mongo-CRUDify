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

//get data from database
app.get('/products',async(req,res)=>{
    try
    {
        const products=await Product.find({});
        res.status(200).json(products);
    }
    catch(error)
    {
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
});

//specify id to get data from database
app.get('/products/:id',async(req,res)=>{
    try
    {
        const {id}=req.params;//.id;
        // id=mongoose.Types.ObjectId(id);
        // console.log(id);
        const product=await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch(error)
    {
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
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