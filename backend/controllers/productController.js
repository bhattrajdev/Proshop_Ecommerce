import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";



// @des Fetch all products
// @route GET /api/products
// @access Public

const getProducts = asyncHandler(async(req,res) =>{
  const products = await Product.find({});
  res.json(products);
})


const getProductById = asyncHandler(async(req,res) =>{
 const product = await Product.findById(req.params.id);
 if (product) {
   res.json(product);
 } else {
   res.status(404);
   throw new Error("Product not found");
 }
 res.json(product);
})

// to delete product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
      await product.deleteOne();
      res.json({ message: "Product Removed" });
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }

});



export {getProducts,getProductById,deleteProduct}