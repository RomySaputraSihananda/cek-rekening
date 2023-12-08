import path from "path";
import express, { Request, Response, Express } from "express";
import { body, validationResult } from "express-validator";
import * as swaggerUi from "swagger-ui-express";

import Search from "./utils/Search";
import BodyResponse from "./utils/BodyResponse";

const swaggerDocument = require("./config/swagger.json");

const app: Express = express();

const BASE_URL: string = "/api/v1";
const PORT: number = 4444;

const search: Search = new Search();

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req: Request, res: Response) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

app.get(
  `${BASE_URL}/bank`,
  async (req: Request, res: Response): Promise<Response> => {
    return res
      .status(200)
      .json(
        new BodyResponse("OK", 200, "all name of bank", await search.getBank())
      );
  }
);

app.get(
  `${BASE_URL}/ewallet`,
  async (req: Request, res: Response): Promise<Response> => {
    return res
      .status(200)
      .json(
        new BodyResponse(
          "OK",
          200,
          "all name Ewallet",
          await search.getWallet()
        )
      );
  }
);

app.post(
  `${BASE_URL}/check`,
  [body("bankCode").isString(), body("accountNumber").isString()],
  async (req: Request, res: Response): Promise<Response> => {
    const { accountNumber } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty() || !/\d{10,16}/g.exec(accountNumber)) {
      return res
        .status(400)
        .json(new BodyResponse("Bad Request", 400, "", null));
    }

    const data = await search.checkData(req);

    if (!data)
      return res
        .status(404)
        .json(new BodyResponse("Not Found", 404, "data not found", data));

    return res
      .status(200)
      .json(new BodyResponse("OK", 200, "data from database", data));
  }
);

app.use((req: Request, res: Response, next: Function) => {
  res.render("index");
});

app.listen(PORT, () => console.log(`[server] : http://localhost:${PORT}`));
