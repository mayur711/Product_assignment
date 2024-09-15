const productRepo = require('../data/product')

async function editProduct(data) {

    return await productRepo.update(data, {
        where: { productId: data.productId }
    })
}

module.exports = { editProduct }

