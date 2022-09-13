import express, { Express, Request, Response } from "express";

const app: Express = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("⚡️Express + TypeScript Server");
});

app.listen(PORT, () => {
  console.log(`🚀 [SERVER] is running on port http://localhost:${PORT}`);
});
