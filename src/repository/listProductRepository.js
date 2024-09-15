const productRepo = require('../data/product')

async function listProduct() {
       return await productRepo.findAll({
              attributes: ['productId', 'productName', 'productPrice','productColor','productType','productDescription']
       });
}

module.exports = { listProduct }