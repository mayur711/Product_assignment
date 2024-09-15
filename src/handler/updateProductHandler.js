const productService = require("../service/updateProductService");
const schema = require('../schema/productValidator');
const validator = require('../validator/validator');
const response = require('../response/response');

module.exports.handle = async (event, context, callback, error) => {
    try {
        return await doProcess(event, callback, error);
    } catch (error) {
        return error;
    }
};

async function doProcess(event) {
    console.log('doProcess updateProductHandler --> Start');
    const data = JSON.parse(event.body);

    //performing validation
    var vRes = await validator.doValidate(data, schema.editProduct);
    console.log("resp",vRes);
    if (!vRes.valid) {
        vRes.errors.forEach(function (error) {
            error.errorMessage = error.errorMessage;
        });
        return response.sendBadRequestError(vRes.errors);
    }
    console.log('doProcess updateProductHandler --> end');
    //calling service file
    return await productService.updateProduct(data);
}
