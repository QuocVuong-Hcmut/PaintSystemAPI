
import * as dotenv from 'dotenv' 
import db from "../models/index.js";
dotenv.config();
let secret = process.env.SECRET_ENV;
let getAllFinishedProduct = async (req, res) => {
    try{
        const listFinishedProduct = await db.FinishedProduct.findAll();
        if(!listFinishedProduct) return res.status(404).json("Not Found!");
        return res.status(200).json(listFinishedProduct);
    }catch(e){
        return res.status(500).json(e)
    }
  }
  let getFinishedProductByTime = async (req, res) => {
    const startTime = new Date(req.query.starttime);
    const endTime = new Date(req.query.endtime);
    console.log(startTime)
    console.log(endTime)
    try{
        let listFinishedProduct= [];
        let listAllFinishedProduct = await db.FinishedProduct.findAll({
            where:{
                dateTime:{
                    [Op.between]: [startTime,endTime]
                }
            }
        });
        return res.status(200).json(listAllFinishedProduct);
    }catch(e){
        return res.status(500).json(e)
    }
  }
  let getFinishedProductByIdProduct = async (req, res) => {
    try{
        console.log( req.params.idproduct)
        const Alarm = await db.FinishedProduct.findOne({ where: { idProduct: req.params.idproduct } })
        if(!Alarm) return res.status(404).json("Not Found!")
        return res.status(200).json(Alarm);
    }catch(e){
        return res.status(500).json({"Server Error!!":e})
    }
  }
  export default {getAllFinishedProduct, getFinishedProductByTime, getFinishedProductByIdProduct};