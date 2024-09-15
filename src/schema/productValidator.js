module.exports.regProduct = {
    type: 'object',
    properties: {
        productName: {
            type: 'string', minLength: 1, maxLength: 60,
            errorMessage: {
                minLength: 'Product name should be 1 characters or more',
                maxLength: ' Product name should be 60 characters or less ',
                type: ' Product type should be String only'
            }
        },
        productPrice: {
            type: 'integer',
            errorMessage: {
                type: 'Product price should be of number'
            }
        },

        productColor: {
            type: 'string', minLength: 1, maxLength: 30,
            errorMessage: {
                minLength: ' Product color should be 1 characters or more ',
                maxLength: ' Product color should be 60 characters or less ',
                type: ' Product type should be String only'
            }
        },

        productType: {
            type: 'string', minLength: 1, maxLength: 60,
            errorMessage: {
                minLength: 'Product type should be 60 characters or less',
                maxLength: ' Product type should be 60 characters or less ',
                type: ' Product type should be String only'
            }
        },

        productDescription: {
            type: 'string', minLength: 1, maxLength: 80,
            errorMessage: {
                minLength: ' Product description should be 60 characters or less',
                maxLength: ' Product description should be 60 characters or less ',
                type: ' Product color should be string only'
            }
        },

    },
    required: ['productName', 'productPrice', 'productColor', 'productType', 'productDescription'],
    errorMessage: {
        required: {
            productName: 'Please enter name',
            productPrice: 'please enter price',
            productColor: 'please enter color',
            productType: 'please enter type of product',
            productDescription: 'please enter description'
        }
    }, additionalProperties: true
};

module.exports.editProduct = {
    properties: {
        productId: {
            type: 'integer',
            errorMessage: {
                type: ' Product ID should have numbers only ',
            }
        },
        productName: {
            type: 'string', minLength: 1, maxLength: 60,
            errorMessage: {
                minLength: 'Product name should be 60 characters or less',
                maxLength: ' Product name should be 60 characters or less ',
                type: ' Product name should be string only '
            }
        },
        productPrice: {
            type: 'integer',
            errorMessage: {
                type: 'Product price should be of number'
            }
        },

        productColor: {
            type: 'string', minLength: 1, maxLength: 60,
            errorMessage: {
                minLength: ' Product color should be 60 characters or less ',
                maxLength: ' Product color should be 60 characters or less ',
                type: ' Product color should be string only'
            }
        },

        productType: {
            type: 'string', minLength: 1, maxLength: 60,
            errorMessage: {
                minLength: 'Product type should be 60 characters or less',
                maxLength: ' Product type should be 60 characters or less ',
                type: ' Product type should be string only'
            }
        },
        productDescription: {
            type: 'string', minLength: 1, maxLength: 80,
            errorMessage: {
                minLength: ' Product description should be 60 characters or less',
                maxLength: ' Product description should be 60 characters or less ',
                type: ' Product description should be string only'
            }
        },

    },
    required: ['productId', 'productName', 'productPrice', 'productColor', 'productType', 'productDescription'],
    errorMessage: {
        required: {
            productName: 'Please enter name',
            productPrice: 'please enter price',
            productColor: 'please enter color',
            productType: 'please enter type of product',
            productDescription: 'please enter description'
        }
    },
};


module.exports.deleteProduct = {
    properties: {
        productId: {
            type: 'integer', pattern: "^[0-9]",
            errorMessage: {
                type: ' Product id should have numbers only '
            }
        }
    },
    required: ['productId'],
};




