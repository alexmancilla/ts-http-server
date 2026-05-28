import type { Request, Response  } from "express";
import { respondWithJSON } from "./json.js";


export async function handlerChirpsValidate(req: Request, res: Response) {

  type parameters = {
    body: string;
  };

  const params: parameters = req.body;

  const maxChirpLength = 140;
  if (params.body.length > maxChirpLength) {
    // generic error handler
    throw new Error("Chirp is too long");
  }

  const words = params.body.split(" "); 
  const bad_words = ["kerfuffle", "sharbert", "fornax"]

  const cleanedWords = words.map((word) => {
    const isBad = bad_words.includes(word.toLowerCase());
    return isBad ? "****": word;
  });

  const cleaned_body = cleanedWords.join(" ");

  respondWithJSON(res, 200, {cleanedBody: cleaned_body});
}

