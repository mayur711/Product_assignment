const productRepo = require("../repository/updateProductRepository");
const response = require("../response/response");

async function updateProduct(data) {
    console.log('updateProduct updateProductService --> Start');
    var productData = await productRepo.editProduct(data);
    if (productData == 0) {
        console.log('updateProduct updateProductService --> End');
        return response.sendBadRequestError("Data Not Available ");
    }
    return response.sendSuccessResponse("Updated Successfully");
}
module.exports = { updateProduct }