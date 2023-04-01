import express from "express";
import controller from "../controller/productController.js";
import { verifyAccessToken } from "../middleware/jwtAction.js";
const route = express.Router();
const routes = (app) => {
  route.get("/all", controller.getAllProduct);
  route.get("/:id", controller.getSingleProduct);
  route.post("/", controller.createProduct);
  route.put("/:id", controller.updateProduct);
  route.post("/delete/:id", controller.deleteProduct);
  return app.use("/product", route);
};
export default routes;
