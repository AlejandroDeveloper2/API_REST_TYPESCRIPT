import "dotenv/config";
import express from "express";
import cors from "cors";

import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(
  cors({
    origin: ["*"],
  })
);
app.use(express.json());
app.use(router);
db().then(() => console.log("Conexión lista"));
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
