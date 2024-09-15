const productRepository = require("../repository/listProductRepository");
const response = require("../response/response");

async function getProduct() {
    console.log('getProduct listProductService --> Start');
    var productList = await productRepository.listProduct();
    console.log(productList)
    if (productList.length == 0) {
        return response.sendBadRequestError("Data Not Available ");
    }
    console.log('getProduct listProductService --> End');
    return response.sendSuccessResponse(productList);

}
module.exports = { getProduct }