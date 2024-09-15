const logger = require('logger')
// Function to return successful response
const sendSuccessResponse = (body) => {
    var data = {
        "message": body
    };
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
}

//Function to return error response
const sendErrorResponse = (statusCode, body) => {
    console.log("Error :" + statusCode + " => " + body);
    var data = {
        "message": body
    };
    return {
        statusCode: statusCode,
        body: JSON.stringify(data)
    };
}

//Define multiple methods to inovke sendErrorResponse

const sendBadRequestError = (body) => {
    return sendErrorResponse(400, body);
}

const sendResourceNotFoundError = (body) => {
    return sendErrorResponse(404, body);
}

const sendInternalServerError = (body) => {
    return sendErrorResponse(500, body);
}

//Export these functions which are used by other JS files
module.exports = {
    sendSuccessResponse,
    sendBadRequestError,
    sendInternalServerError,
    sendResourceNotFoundError
}