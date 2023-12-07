import express, { Request, Response } from "express";
import createError from "http-errors";

import * as swaggerUi from "swagger-ui-express";
import Search from "./utils/Search";

const swaggerDocument = require("./config/swagger.json");

const app = express();

const BASE_URL = "/api/v1/";
const PORT = 4444;

const search = new Search();

// {"type":"1","bank":"1","norek":"7634876236748723","captcha":"03AFcWeA4C-JDnDju7XB6Mk_GpLSIA2aSv4wk-FoKka9Bo87NheDXAc4X4tcd9KEC9pjSyxJxPGhooYPNSdb7d3isxR-RlrE3JQbDgRAbDCQyNYiQCwD1vw_00J-fmBOfGjut4KqP63nQT2xMdYerFCLYzajFYTKsS2Rdme19aZzU5cfBMwZDQ-6AIXBwzfIydqDh8WlYGdzZR2EyCZYr-YuoLJoioehnG9wrJmy5pfkbuiorAKx07CijPTFyPUtI4WCCpY4iw1IlqkH5JU7mjYcjuK8K_p2gFWaLqDaePxXMWVlFeVCysmLaqDiVt40qS_sfpOMnBUQd6GfNHcU7gd4TsoHFMPLdkZKj2Qt1eliOUVxZ-WXVDF6WOcGUswj-71YrhD_FsNJmfpicPV-ddB_ku3xf6n2z9aMSzR42WFtixMNt1Qm2WNRsD4xi7JV_9XqPjr1b5qukh7MBL6TW7mXWFIIuXyrQMEh-sY9IefFX6Z_QAJWzh4ZMpETQqhOXGJDGcpGSfjW_837b0c-8igyWaNIEUM4xMXKGvZVATi741iC-leZKSmkTsszHmSDufRdNrsDl1n_Ly"}

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get(`${BASE_URL}bank`, async (req: Request, res: Response) => {
  res.json(await search.getBank());
});

app.get(`${BASE_URL}wallet`, async (req: Request, res: Response) => {
  res.json(await search.getWallet());
});

app.get(`${BASE_URL}periksa`, async (req: Request, res: Response) => {
  res.json({ ok: "ok" });
});

app.use((req: Request, res: Response, next: Function) => {
  next(createError(404));
});

app.listen(PORT, () => console.log(`[server] : http://localhost:${PORT}`));
