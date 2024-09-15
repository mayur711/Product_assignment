const productService = require("../service/listProductService");

module.exports.handle = async (context, callback, error) => {

    try {
        return await doProcess(callback, error);
    } catch (error) {
        return error;
    }

};

async function doProcess() {
    console.log('doProcess listProductHandler --> Start');

    //calling service file
    return await productService.getProduct();

}