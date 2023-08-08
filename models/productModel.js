const mongoose=require('mongoose');
const productSchema=mongoose.Schema
(
    {
        name:
        {
            type:String,
            required:[true,'Product name is required'],
        },
        quantity:
        {
            type:Number,
            required:[true,'Product quantity is required'],
            default:0
        },
        price:
        {
            type:Number,
            required:[true,'Product price is required'],
        },
        image:
        {
            type:String,
            required:false,
        },
    },
    //used to add timestamps to the document created and updated at fields are added to the document
    {
        timestamps:true,
    }
);
const Product=mongoose.model('Product',productSchema);
module.exports=Product;