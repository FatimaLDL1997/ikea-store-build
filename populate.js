
import { readFile } from "fs/promises";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import AllItems from "./models/AllItems.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await AllItems.deleteMany();

    const jsonProducts = JSON.parse(
      await readFile(new URL("./mock-data.json", import.meta.url))
    );
    await AllItems.create(jsonProducts);
    console.log("Success!!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();