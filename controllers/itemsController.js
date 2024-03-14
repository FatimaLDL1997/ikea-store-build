import mongoose from "mongoose";
import AllItems from "../models/AllItems.js";
import { StatusCodes } from "http-status-codes";
import Prod from "../models/Product.js";

import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import moment from "moment/moment.js";
import checkPermissions from "../utils/checkPermissions.js";

const getSearchedItems = async (req, res) => {
  console.log("SEARCH function.............");

  console.log(req.query);
  const { search } = req.query;
  const queryObject = {};
  console.log(queryObject);
  if (search) {
    queryObject.text = { $regex: search, $options: "i" };
  }
  console.log(queryObject);

  const prods = await AllItems.find(queryObject );
  if (prods) {
    console.log(prods);
  } else {
    throw new NotFoundError(
      `No items posted yetttttttt with id ${req.user.userId}`
    );
  }

  res.status(StatusCodes.OK).json({ prods });
};

export { getSearchedItems };
