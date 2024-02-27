const express=require("express");
const productController=require('../controllers/productControllers');

const router=express.Router();

router.post("/products",productController.createProduct);
router.get("/products",productController.products);
router.get("/products/:id",productController.product);
router.put("/products/:id",productController.updateProduct);
router.delete("/products/:id",productController.deleteProduct);
module.exports=router;