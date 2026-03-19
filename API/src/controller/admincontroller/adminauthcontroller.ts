import createResponse from "../../helpers/createResponse";
import bcrypt from "bcrypt";
import { generateToken } from "../../helpers/jwt";
import { admin } from "../../entities/admin";

//register
export const adminRegister = async (req: any, res: any) => {
  try {
    const { name, email, password, mobile } = req.body;
    const isExists = await admin.findOne({ where: { email: email } });
    if (isExists) {
      return createResponse(res, false, 400, "admin already Exist", [], true);
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await admin.save({
        name,
        email,
        password: hashedPassword,
        mobile,
      });
      return createResponse(
        res,
        true,
        201,
        "admin Registration successfully",
        result,
        false,
      );
    }
  } catch (error) {
    return createResponse(res, false, 500, "Internal Server Error", [], true);
  }
};
//login
export const adminLogin = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const isExists = await admin.findOne({ where: { email: email } });
    if (!isExists) {
      return createResponse(res, false, 404, "admin Not Found", [], true);
    } else {
      const isMatched = await bcrypt.compare(password, isExists.password);
      if (!isMatched) {
        return createResponse(res, false, 400, "Invalid credentials", [], true);
      } else {
        const payload = {
          id: isExists.id,
          email: isExists.email,
        };
        const token = generateToken(payload);
        return createResponse(
          res,
          true,
          200,
          "Login Successfully",
          { ...isExists, token },
          false,
        );
      }
    }
  } catch (error) {
    return createResponse(res, false, 500, "Internal Server Error", [], true);
  }
};
