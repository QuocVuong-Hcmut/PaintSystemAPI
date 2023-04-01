import * as dotenv from "dotenv";
import db from "../models/index.js";
import { verifyAccessToken } from "../middleware/jwtAction.js";
dotenv.config();
let secret = process.env.SECRET_ENV;
let getAllProduct = async (req, res) => {
  try {
    const listProduct = await db.Product.findAll();
    if (!listProduct) return res.status(404).json("Not Found!");
    return res.status(200).json(listProduct);
  } catch (e) {
    return res.status(500).json("Looix adjhcb");
  }
};
let getSingleProduct = async (req, res) => {
  try {
    const Product = await db.Product.findOne({ where: { id: req.params.id } });
    if (!Product) return res.status(404).json("Not Found!");
    return res.status(200).json(Product);
  } catch (e) {
    return res.status(500).json(e);
  }
};
let updateProduct = async (req, res) => {
  try {
    const product = await db.Product.findOne({ where: { id: req.params.id } });
    product.set({
      ...req.body,
    });
    await product.save();
    return res.status(200).json("Update Success");
  } catch (e) {
    return res.status(500).json(e);
  }
};
let createProduct = async (req, res) => {
  try {
    const product = await req.body;
    await db.Product.create(product);
    return res.status(200).json(product);
  } catch (e) {
    return res.status(500).json(e);
  }
};
let deleteProduct = async (req, res) => {
  try {
    console.log("id", req.params.id);
    await db.Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json("success");
  } catch (e) {
    return res.status(500).json(e);
  }
};
export default {
  getAllProduct,
  getSingleProduct,
  updateProduct,
  createProduct,
  deleteProduct,
};
