
'use strict';
var Ajv = require('ajv');
var ajv = new Ajv({ allErrors: true, jsonPointers: true });
require('ajv-errors')(ajv);
module.exports = { doValidate }
function doValidate(body, schemas) {
    var validate = ajv.compile(schemas);
    var valid = validate(body);
    var vRes = new Object();
    var key = 'errors';
    vRes[key] = [];
    vRes.valid = valid;
    if (!valid) {
        validate.errors.forEach(function (error) {
            var oError = {
                errorMessage: error.message
            }
            vRes[key].push(oError);
        });
    }
    return vRes;
}


