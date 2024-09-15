const productRepo = require('../data/product')

async function saveProduct(requestBody) {

    return await productRepo.create({
        productName: requestBody.productName,
        productPrice: requestBody.productPrice,
        productColor: requestBody.productColor,
        productType: requestBody.productType,
        productDescription: requestBody.productDescription
    })
}

module.exports = { saveProduct }