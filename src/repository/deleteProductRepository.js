const productRepo = require('../data/product')

async function removeProduct(data) {
    return await productRepo.destroy({
        where: {
            productId: data
        }
    });
}

module.exports = { removeProduct }