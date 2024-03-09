import type { Response } from "express";
import { GraphQLError } from "graphql";
import type { GQLErrorType } from "./types";
export declare class Errors {
    static readonly NOT_FOUND: {
        status: number;
        code: string;
    };
    static readonly BAD_REQUEST: {
        status: number;
        code: string;
    };
    static readonly UNAUTHORIZED: {
        status: number;
        code: string;
    };
    static readonly UNEXPECTED_ERROR: {
        status: number;
        code: string;
    };
    static createError(type: GQLErrorType, message: string, error?: Error): GraphQLError;
    static handler(response: Response): (error: GraphQLError) => GraphQLError;
}
