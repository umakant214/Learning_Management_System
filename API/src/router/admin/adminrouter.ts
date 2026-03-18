import express from "express";
import { adminLogin } from "../../controller/admincontroller/adminauthcontroller";
const adminRouter = express.Router();
adminRouter.post("/login", adminLogin);
export default adminRouter;
