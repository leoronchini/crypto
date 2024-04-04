"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connector_typescript_1 = require("@binance/connector-typescript");
/*
Para obter as chaves da API
Acesse o site da Binance: https://www.binance.com/
Faça login em sua conta.
Clique em "Segurança".
Em "Gerenciamento de API", clique em "Criar API".
Siga as instruções na tela para criar uma nova API.
Anote a chave da API e o segredo da API.
*/
const API_KEY = "tT4UlA8memnpFbM6yoDfOCyAxYy5ogD5FSOMCoXp6Znlf1mLrNTelEZikyrxxEjR";
const API_SECRET = "btDvNzbXrY9rOmNdgeA88gMMb0f9dX3S1omB4W5kgNFOufqEUiN8LmmeOH1Dt3Bb";
const BASE_URL = "https://api.binance.com";
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Olá, mundo!");
    const client = new connector_typescript_1.Spot(API_KEY, API_SECRET, { baseURL: BASE_URL });
    client
        .exchangeInformation()
        .then((res) => {
        console.log(res);
    })
        .catch((err) => {
        console.log(err);
    });
    // res.send(client)
});
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});