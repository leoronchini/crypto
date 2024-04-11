import express, { Request, Response } from "express";
import { Spot } from "@binance/connector-typescript";
import * as dotenv from 'dotenv';
dotenv.config();


const BINANCE_API_KEY = process.env.BINANCE_API_KEY;
const BINANCE_SECRET_KEY = process.env.BINANCE_SECRET_KEY
const BASE_URL = "https://api.binance.com";
const app = express();
const PORT = process.env.PORT;

app.get("/tradeBySymbol/:symbol/", (req: Request, res: Response) => {
  /*Get trades for a specific account and symbol.*/
  console.log("Getting trades by the symbol:")
  let symbol = req.params.symbol;

  const trade = new Spot(BINANCE_API_KEY, BINANCE_SECRET_KEY, { baseURL: BASE_URL });
  trade
    .accountTradeList(symbol)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
    
    res.send(trade)

});

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
