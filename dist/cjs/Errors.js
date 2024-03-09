"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
const graphql_1 = require("graphql");
class Errors {
    static createError(type, message, error) {
        return new graphql_1.GraphQLError(message, {
            extensions: this[type],
            originalError: error,
        });
    }
    static handler(response) {
        return (error) => {
            var _a;
            const status = (_a = error.extensions) === null || _a === void 0 ? void 0 : _a.status;
            response.status(status || 500);
            return error;
        };
    }
}
exports.Errors = Errors;
Errors.NOT_FOUND = {
    status: 404,
    code: "NOT_FOUND",
};
Errors.BAD_REQUEST = {
    status: 400,
    code: "BAD_REQUEST",
};
Errors.UNAUTHORIZED = {
    status: 401,
    code: "UNAUTHORIZED",
};
Errors.UNEXPECTED_ERROR = {
    status: 500,
    code: "UNEXPECTED_ERROR",
};
