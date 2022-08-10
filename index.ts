import express from "express";
import type { Request, Response } from "express";

const app = express();

const indexHandler = (req: Request, res: Response) => {
  res.json({
    message: "Hello World!",
  });
};

app.get("/", indexHandler);

app.listen(80, () => console.log("Server is running"));
