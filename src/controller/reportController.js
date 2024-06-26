import * as dotenv from "dotenv";
import db from "../models/index.js";
import { verifyAccessToken } from "../middleware/jwtAction.js";
const { Op } = require("sequelize");
dotenv.config();
let secret = process.env.SECRET_ENV;
let getPreReport = async (req, res) => {
  const startTime = new Date(req.query.starttime);
  const endTime = new Date(req.query.endtime);
  try {
    let listAllProduct = await db.Product.findAll();
    let listPreAllFinishedProduct = await db.FinishedProduct.findAll();
    let listAllFinishedProduct = listPreAllFinishedProduct.filter((pre) => {
      return pre.DateTime > startTime && pre.DateTime < endTime;
    });
    // let listAllFinishedProduct = await db.FinishedProduct.findAll({
    //   where: {
    //     id: {
    //       [Op.between]: [0, 10],
    //     },
    //   },
    // });
    let listPreReport = [];
    listAllFinishedProduct.map((product) => {
      if (
        listPreReport.filter((pre) => pre.IdProduct == product.IdProduct)
          .length == 0
      ) {
        let listProductToProductId = listAllFinishedProduct.filter(
          (item) => item.IdProduct == product.IdProduct
        );
        const numberStandard = listProductToProductId.filter(
          (pro) => pro.status
        ).length;
        const errorStandard = listProductToProductId.filter(
          (pro) => !pro.status
        ).length;

        const Products = listAllProduct.filter(
          (pro) => pro.IdProduct == product.IdProduct
        );

        listPreReport.push({
          DateTime: product.DateTime,
          IdProduct: product.IdProduct,
          Color: Products[0] != null ? Products[0].Color : "#ff6900",
          Quantity: numberStandard + errorStandard,
          ProductError: errorStandard,
        });
        return null;
      }
    });
    return res.status(200).json(listPreReport);
  } catch (e) {
    return res.status(500).json(e);
  }
};

let postReport = async (req, res) => {
  try {
    const listReport = await req.body;
    listReport.forEach(async (report) => {
      await db.Report.create(report);
    });
    return res.status(200).json(listReport);
  } catch (e) {
    return res.status(500).json(e);
  }
};
let getOEE = async (req, res) => {
  try {
    const starttime = new Date(req.query.starttime);
    const endTime = new Date(req.query.endtime);
    const IdProduct = req.query.idproduct;
    let preListAllFinishedProduct = await db.FinishedProduct.findAll();
    let ListProduct = await db.Product.findAll();
    let preListReport = await db.Report.findAll();
    let RunTime = 0;
    let PerformanceTime = 0;
    let ScheduleTime = 0;
    let QuantityStandard = 0;
    let QuantityError = 0;
    const ListChartCycle = [];
    const ListChartWeight = [];
    //load product
    const Product = await db.Product.findOne({
      where: { IdProduct: IdProduct },
    });
    console.log(Product);
    if (preListAllFinishedProduct.length == 0 || preListReport.length == 0) {
      return res.status(200).json({
        Availability: 0,
        Quality: 0,
        Performance: 0,
        OEE: 0,
      });
    }
    for (const FinishedProduct of preListAllFinishedProduct) {
      let DateTime = new Date(FinishedProduct.DateTime);
      if (
        DateTime >= starttime &&
        DateTime <= endTime &&
        IdProduct == FinishedProduct.IdProduct
      ) {
        if (FinishedProduct.Status) {
          QuantityStandard++;
        } else {
          QuantityError++;
        }
        if (FinishedProduct.IdProduct == IdProduct) {
          ListChartCycle.push({
            Date: FinishedProduct.DateTime,
            scales: FinishedProduct.CycleTime,
          });
          ListChartWeight.push({
            Date: FinishedProduct.DateTime,
            scales: FinishedProduct.Weight,
          });
        }
        ListProduct.forEach((product) => {
          if (product.IdProduct == FinishedProduct.IdProduct) {
            PerformanceTime =
              product.BreakTime * 15 +
              product.MixingTime * 15 +
              product.WashingTime * 15;
          }
        });
      }
    }
    for (const ListReport of preListReport) {
      let DateTime = new Date(ListReport.DateTime);
      if (DateTime >= starttime && DateTime <= endTime) {
        RunTime += ListReport.RunTime;
        ScheduleTime += ListReport.ScheduleTime;
      }
    }
    let Availability = (RunTime / ScheduleTime).toFixed(4);
    let Quality = (
      QuantityStandard /
      (QuantityError + QuantityStandard)
    ).toFixed(3);
    let Performance = (RunTime / PerformanceTime).toFixed(4);
    let OEE = (Availability * Quality * Performance * 100).toFixed(2);
    Availability *= 100;
    Quality *= 100;
    Performance *= 100;
    return res.status(200).json({
      Availability,
      Quality,
      Performance,
      OEE,
      ListChartCycle,
      ListChartWeight,
      IdProduct,
      CycleTime:
        Product.MixingTime + Product.BreakTime + Product.WashingTime + 5,
    });
  } catch (e) {
    return res.status(500).json(e);
  }
};
export default { getPreReport, postReport, getOEE };
