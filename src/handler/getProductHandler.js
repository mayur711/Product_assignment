const productService = require("../service/getProductService");

module.exports.handle = async (event, context, callback, error) => {
    try {
        return await doProcess(event, callback, error);
    } catch (error) {
        callback(error, 'try again later');
    }

};

async function doProcess(event, callback, error) {
    console.log('doProcess listSingleProductHandler --> Start');
    const data = event.pathParameters.productId;

    //calling service file
    return await productService.getProduct(data);

}
