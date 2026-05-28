import express from "express";
import { handlerReadiness } from "./app/api/readiness.js";
import {middlewareLogResponses, middlewareMetricsInc, errorHandler} from "./app/api/middleware.js"
import { handlerGetServerHits } from "./app/metrics/metricsHandler.js";
import { handlerResetHits } from "./app/reset/resetHits.js";
import { handlerChirpsValidate } from "./app/api/validate_chirp.js";




const app = express();
const PORT = 8080;



app.use(middlewareLogResponses);
app.use("/app", middlewareMetricsInc, express.static("./src/app"));

app.get('/api/healthz', (req, res, next) => {
  Promise.resolve(handlerReadiness(req, res)).catch(next);
});
app.get("/admin/metrics", (req, res, next) => {
  Promise.resolve(handlerGetServerHits(req, res)).catch(next);
});
app.post("/admin/reset", (req, res, next) => {
  Promise.resolve(handlerResetHits(req, res)).catch(next);
});
app.use(express.json());
app.post("/api/validate_chirp", (req, res, next) => {
  Promise.resolve(handlerChirpsValidate(req, res)).catch(next);
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});



