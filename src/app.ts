import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.get("/", (req, res, next) => {
  res.status(201).json({
    status: "success",
    message: "dude, this endpoint works haha",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
