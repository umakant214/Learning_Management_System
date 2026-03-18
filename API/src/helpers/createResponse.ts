const createResponse = (
  res: any,
  success: boolean,
  code: number,
  message: string,
  data: any,
  error: any,
) => {
  return res.status(code).json({
    success,
    message,
    data,
    error,
  });
};

export default createResponse;
