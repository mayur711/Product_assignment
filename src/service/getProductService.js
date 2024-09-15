const productRepo = require("../repository/getProductRepository");
const response = require("../response/response");

async function getProduct(data) {
    console.log('getProduct listProductService --> Start');
    var productList = await productRepo.listProduct(data);
    if (!productList) {
        console.log('getProduct listProductService --> End');
        return response.sendResourceNotFoundError("Data Not Available ");
    }
    return response.sendSuccessResponse(productList);

}
module.exports = { getProduct }