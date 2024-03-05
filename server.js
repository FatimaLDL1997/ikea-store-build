import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

import morgan from "morgan";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

//db and authenticate user
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import prodRouter from "./routes/ProductsRoutes.js";
import favRouter from './routes/FavRoutes.js'
import itemsRouter from './routes/ItemsRoute.js'
//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

import authenticateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.json());

app.use(express.json());
app.use(helmet()); //secure headers
app.use(xss()); // sanitize input
app.use(mongoSanitize()); // prevents mongoDB operator injection

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/prod", authenticateUser, prodRouter);
app.use("/api/v1/fav", authenticateUser, favRouter);
app.use("/api/v1/prod/find", authenticateUser, itemsRouter);

// only when ready to deploy
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
