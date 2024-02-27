const Product=require('../models/product');
// create a product
exports.createProduct=async(req,res)=>{
    try{
        const { FirstName,LastName,Gender,mobileno,emailid,Address,Message,imgUrl }=req.body;

    let newProduct=new Product({
        FirstName,
        LastName,
        mobileno,
        emailid,
        Address,
        Message,
        imgUrl
    });
    newProduct =await newProduct.save();
    res.status(201).json(newProduct)
    }
    catch(e){
        res.status(500).json({error:e.message});
    }
};

// to view all products
exports.products=async(req,res)=>{
    try{
        const products=await Product.find({});
        res.json(products);
    }
    catch{
        res.status(500).json({error:e.message});
    }
};
// to view any one product 
exports.product=async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        res.json(product);
    }
    catch{
        res.status(500).json({error:e.message});
    }
};
// update any product
exports.updateProduct=async(req,res)=>{
    try{
        const { FirstName,LastName,Gender,mobileno,emailid,Address,Message,imgUrl }=req.body;

    let updatedProduct=new Product({
        FirstName,
        LastName,
        mobileno,
        emailid,
        Address,
        Message,
        imgUrl,
        _id:req.params.id
    });
    updatedProduct =await Product.findByIdAndUpdate(req.params.id,updatedProduct);
    res.json({message:`Product with id ${req.params.id} updated successfully`});
    }
    catch(e){
        res.status(500).json({error:e.message});
    }
};
// delete a product
exports.deleteProduct=async(req,res)=>{
    try{
        const deleteProduct=await Product.findByIdAndDelete(req.params.id);
        res.json({message:`Product with id ${req.params.id} deleted successfully`});
    }
    catch{
        res.status(500).json({error:e.message});
    }
};