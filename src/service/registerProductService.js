const productRepository = require('../repository/registerProductRepository');
const response = require('../response/response')

async function createProduct(requestBody) {

    console.log("createproduct  registerProductService ===> Start");
    var data = await productRepository.saveProduct(requestBody);
    if (data.affectedRows == 0) {
        return response.sendBadRequestError("Product Registration Failed");
    }
    return response.sendSuccessResponse("Product Added Successfully");

}
module.exports = { createProduct }