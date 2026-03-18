import { user } from "../../entities/user";
import createResponse from "../../helpers/createResponse";
import bcrypt from "bcrypt";
import "dotenv/config";
import { generateToken } from "../../helpers/jwt";
//register
export const userRegister = async (req: any, res: any) => {
  try {
    const { name, email, password, mobile } = req.body;
    const isExists = await user.findOne({ where: { email: email } });
    if (isExists) {
      return createResponse(res, false, 400, "User already Exist", [], true);
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await user.save({
        name,
        email,
        password: hashedPassword,
        mobile,
      });
      return createResponse(
        res,
        true,
        201,
        "User Registration successfully",
        result,
        false,
      );
    }
  } catch (error) {
    return createResponse(res, false, 500, "Internal Server Error", [], true);
  }
};
//login
export const userLogin = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const isExists = await user.findOne({ where: { email: email } });
    if (!isExists) {
      return createResponse(res, false, 404, "User Not Found", [], true);
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
