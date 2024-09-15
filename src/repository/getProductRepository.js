const productRepo = require('../data/product');

async function listProduct(data) {
    return await productRepo.findOne({
        attributes: ['productId', 'productName', 'productPrice','productColor','productType','productDescription'],
        where: {
            productId: data
        }
        , Raw: true
    });
}

module.exports = { listProduct }