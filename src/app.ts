import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";

const corsOptions = {
  origin: "*",
};

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

app.get("/", (req, res, next) => {
  res.status(201).json({
    status: "success",
    message: "dude, this endpoint works haha",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
