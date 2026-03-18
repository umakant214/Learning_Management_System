import createResponse from "../../helpers/createResponse";
import bcrypt from "bcrypt";
import { generateToken } from "../../helpers/jwt";
import { admin } from "../../entities/admin";
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
