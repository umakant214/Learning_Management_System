import express from "express";
import "dotenv/config";
import { AppDataSource } from "./dbConfig/dbConfig";
import cors from "cors";
import userRouter from "./router/user/userrouter";
import adminRouter from "./router/admin/adminrouter";
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8000;
AppDataSource.initialize()
  .then(() => {
    console.log("database connected successfully..");
  })
  .catch((error) => {
    console.log(error, "something went wrong !");
  });

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
