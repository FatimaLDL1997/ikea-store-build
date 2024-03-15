import mongoose from "mongoose";
import Product from "../models/Product.js";
import { StatusCodes } from "http-status-codes";
import Fav from "../models/Fav.js";

import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import moment from "moment/moment.js";
import checkPermissions from "../utils/checkPermissions.js";

const sendFavItems = async (req, res) => {

  req.body.createdBy = req.user.userId;

  const favList = await Fav.create(req.body);
  res.status(StatusCodes.CREATED).json({ favList });
};

const updateFavItems = async (req, res) => {
  console.log("controller update function");
  
  const fav = await Fav.findOne({createdBy:req.user.userId});

  if (!fav) {
    throw new NotFoundError(`No product with id ${req.user.userId}`);
  }
  const updatedFavItems = await Fav.findOneAndUpdate(
    { createdBy: req.user.userId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updatedFavItems });
};

const getFavItems = async (req, res) => {
  console.log("GET function");
  console.log(req.user)
  const retrievedItems = await Fav.findOne({createdBy:req.user.userId});
  if (retrievedItems) {
    console.log(retrievedItems);
  } else {
    throw new NotFoundError(`No items posted yet with id ${req.user.userId}`);
  }
  res.status(StatusCodes.OK).json({ retrievedItems });
};

const emptyFavItems = async (req, res) => {
  const retrievedItems = await Fav.findOne({ createdBy: req.user.userId });

  if (!retrievedItems) {
    throw new NotFoundError(`No items posted yet with id ${req.user.userId}`);
  }

  console.log("fav controller DELETE!!");
  console.log(retrievedItems);

  checkPermissions(req.user, retrievedItems.createdBy);

  await retrievedItems.remove();
  res.status(StatusCodes.OK).json({ msg: "success! REMOVED!!" });
};
export { sendFavItems, getFavItems, updateFavItems, emptyFavItems};
