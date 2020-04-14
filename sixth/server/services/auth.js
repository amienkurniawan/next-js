
exports.checkJWT = function (request, response, next) {
    const isValidToken = false;
    if (isValidToken) {
        next();
    } else {
        return response.status(401).send({ title: 'Not Authorize', description: 'Please login in order to get data' })
    }
}
