import { Request, Response, NextFunction } from "express";

export type APIConfig = {
  fileserverHits: number;
};

export const config: APIConfig = {
  fileserverHits: 0,
};