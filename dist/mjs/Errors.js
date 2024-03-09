import { GraphQLError } from "graphql";
export class Errors {
    static NOT_FOUND = {
        status: 404,
        code: "NOT_FOUND",
    };
    static BAD_REQUEST = {
        status: 400,
        code: "BAD_REQUEST",
    };
    static UNAUTHORIZED = {
        status: 401,
        code: "UNAUTHORIZED",
    };
    static UNEXPECTED_ERROR = {
        status: 500,
        code: "UNEXPECTED_ERROR",
    };
    static createError(type, message, error) {
        return new GraphQLError(message, {
            extensions: this[type],
            originalError: error,
        });
    }
    static handler(response) {
        return (error) => {
            const status = error.extensions?.status;
            response.status(status || 500);
            return error;
        };
    }
}
