import  express  from "express";
import controller from "../controller/finishedproductController.js"
import {verifyAccessToken} from "../middleware/jwtAction.js";
const route = express.Router()
const routes = (app) => {
    route.get('/all',verifyAccessToken, controller.getAllFinishedProduct);
    route.get('/time',verifyAccessToken, controller.getFinishedProductByTime);
    route.get('/:idproduct',verifyAccessToken, controller.getFinishedProductByIdProduct);
    return app.use('/finishedproduct', route);
    
}
export default routes;