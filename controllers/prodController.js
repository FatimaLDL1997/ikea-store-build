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

const getCartItems = async (req, res) => {
  console.log("GET function.............");
  console.log(req.user);
  const retrievedItems = await Prod.findOne({ createdBy: req.user.userId });
  if (retrievedItems) {
    console.log(retrievedItems);
  } else {
    throw new NotFoundError(`No items posted yet with id ${req.user.userId}`);
  }
  res.status(StatusCodes.OK).json({ retrievedItems });
};

// const getSearchedItems = async (req, res) => {
//   console.log("SEARCH function.............");

//   console.log(req.query);
//   const { search } = req.query;
//   const queryObject = {
//     createdBy: req.user.userId,
//   };
//   console.log(queryObject);
//   if (search) {
//     queryObject.cartItems = { $regex: search, $options: "i" };
//   }
//   console.log(queryObject);

//   const prods = await Prod.find(queryObject); 
//   if(prods){
//     console.log(prods)
//   }
//   else {
//     throw new NotFoundError(`No items posted yetttttttt with id ${req.user.userId}`);
//   }

//   // if (search) {
//   //   queryObject.cartItems = { $regex: search, $options: "i" };
//   // }
//   // let result = Prod.find({ queryObject });
//   // console.log(queryObject);

//   // // console.log(result)

//   // const prods = await result;
//   res.status(StatusCodes.OK).json({ prods });
// };

const sendCartItems = async (req, res) => {
  req.body.createdBy = req.user.userId;

  const cartProds = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ cartProds });
};

const updateCartItems = async (req, res) => {
  console.log("controller update function");

  const prod = await Prod.findOne({ createdBy: req.user.userId });

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
export {
  
  emptyCartItems,
  sendCartItems,
  updateCartItems,
  getCartItems,
};
