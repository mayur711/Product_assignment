const productRepo = require("../repository/deleteProductRepository");
const response = require("../response/response");

async function deleteProduct(data) {
    console.log('deleteProduct deleteProductService --> Start');
    const productList = await productRepo.removeProduct(data);
    console.log(productList)
    if (!productList) {
        console.log('deleteProduct deleteProductService --> End');
        return response.sendBadRequestError("Data Not Available ");
    }
    return response.sendSuccessResponse("Deleted Successfully");

}
module.exports = { deleteProduct }