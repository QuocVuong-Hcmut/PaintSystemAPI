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
    let listAllFinishedProduct = await db.FinishedProduct.findAll({
      where: {
        id: {
          [Op.between]: [0, 10],
        },
      },
    });
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
        listPreReport.push({
          DateTime: [product.DateTime],
          IdProduct: [product.IdProduct],
          NumberStandard: [numberStandard],
          Error: [errorStandard],
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
    console.log(listReport);
    listReport.forEach(async (report) => {
      await db.Report.create(report);
    });
    return res.status(200).json(listReport);
  } catch (e) {
    return res.status(500).json(e);
  }
};
export default { getPreReport, postReport };
