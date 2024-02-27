const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    FirstName:{type:String,required:true,trim:true},
    LastName:{type:String,required:true,trim:true},
    Gender:{type:String,required:true,trim:true},
    mobileno:{type:Number,required:true,trim:true},
    emailid:{type:String,required:true},
    Address:{type:String,required:true},
    Message:{type:String,required:true},
    imgUrl:{type:String,required:true}
});

const Product=mongoose.model('Product',productSchema)

module.exports=Product