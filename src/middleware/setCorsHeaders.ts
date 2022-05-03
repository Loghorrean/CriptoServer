import {Request, Response} from "express";
import appConfig from "../config/app";

export function setCorsHeaders(req: Request, res: Response, next) {
    res.setHeader("Access-Control-Allow-Origin", appConfig.clientBaseUrl)
    next();
}