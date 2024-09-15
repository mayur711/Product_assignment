const productService = require("../service/deleteProductService");
const schema = require('../schema/productValidator');
const validator = require('../validator/validator')
const response = require('../response/response')

module.exports.handle = async (event, context, callback, error) => {
    try {
        console.log('doProcess deleteProductHandler --> Start');
        return await doProcess(event, callback, error);
    } catch (error) {
        callback(error, 'Try again later');
    }
};

async function doProcess(event) {
    const data = event.pathParameters.productId;
    console.log('doProcess deleteProductHandler --> end');

    //performing validation
    var vRes = await validator.doValidate(data, schema.deleteProduct);
    if (!vRes.valid) {
        vRes.errors.forEach(function (error) {
            error.errorMessage = error.errorMessage;
        });
        return response.sendBadRequestError(vRes.errors);
    }

    //calling service file
    return await productService.deleteProduct(data);

}
