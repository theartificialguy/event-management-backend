import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./schema/index.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  createHandler({
    schema,
  })
);

// app.get("/", (req, res) => {
//   // server health check route
//   res.status(200).send("server online");
// });

// app.listen(PORT, () => console.log(`server running at PORT:${PORT}`));
export default app;
