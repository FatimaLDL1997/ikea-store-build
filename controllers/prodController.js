import mongoose from "mongoose";
import Product from "../models/Product.js";
import { StatusCodes } from "http-status-codes";
import Prod from "../models/Product.js";

import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import moment from "moment/moment.js";
import checkPermissions from "../utils/checkPermissions.js";

const sendCartItems = async (req, res) => {
  // console.log(req.body);

  req.body.createdBy = req.user.userId;

  const cartProds = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ cartProds });
};

const updateCartItems = async (req, res) => {
  console.log("controller update function");
  
  const prod = await Prod.findOne({createdBy:req.user.userId});

  // const prod = await Prod.findOne({ prodId: req.user.userId });

  if (!prod) {
    throw new NotFoundError(`No product with id ${req.user.userId}`);
  }
  //check permissions
  // checkPermissions(req.user, prod.createdBy);
  const updatedCartItems = await Prod.findOneAndUpdate(
    { createdBy: req.user.userId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updatedCartItems });
};

const getCartItems = async (req, res) => {
  console.log("GET function");
  console.log(req.user)
  const retrievedItems = await Prod.findOne({createdBy:req.user.userId});
  if (retrievedItems) {
    console.log(retrievedItems);
  } else {
    throw new NotFoundError(`No items posted yet with id ${req.user.userId}`);
  }
  res.status(StatusCodes.OK).json({ retrievedItems });
};

const emptyCartItems = async (req, res) => {
  const retrievedItems = await Prod.findOne({ createdBy: req.user.userId });

  if (!retrievedItems) {
    throw new NotFoundError(`No items posted yet with id ${req.user.userId}`);
  }

  console.log("prod controller DELETE!!");
  console.log(retrievedItems);

  checkPermissions(req.user, retrievedItems.createdBy);

  await retrievedItems.remove();
  res.status(StatusCodes.OK).json({ msg: "success! REMOVED!!" });
};
export { emptyCartItems, sendCartItems, updateCartItems, getCartItems };
