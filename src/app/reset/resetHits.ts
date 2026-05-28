import type { Request, Response } from "express";
import { config } from "../../config.js";

export function handlerResetHits(_: Request, res: Response) {
    config.fileserverHits = 0;

    res.set("Content-Type", "text/plain; charset=utf-8");
    res.send(`Ok`);
}
