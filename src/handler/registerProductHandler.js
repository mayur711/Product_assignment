const schema = require('../schema/productValidator');
const validator = require('../validator/validator');
const response = require('../response/response');
const productService = require('../service/registerProductService');

module.exports.handle = async (event, context, callback) => {
  try {
  
    return await doProcess(event, context, callback);
  } catch (error) {
    console.log("Error :", error);
    callback(error)
  }
};

async function doProcess(event, callback, error) {
  console.log('doProcess registerProduct --> Start');
  const requestBody = JSON.parse(event.body);

  //performing validation..
  var vRes = await validator.doValidate(requestBody, schema.regProduct);
  if (!vRes.valid) {
    vRes.errors.forEach(function (error) {
      error.errorMessage;
    });
    return response.sendBadRequestError(vRes.errors);
  }
  console.log("doProcess registerProduct ==> end")

  //calling service file
  return await productService.createProduct(requestBody);
};
