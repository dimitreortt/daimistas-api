import { add, Daimista, get, getByBotao, remove, update } from "./bd";
import express from "express";

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  const daimistas = get();
  res.send(daimistas);
});

server.get("/:numeroBotao", (req, res) => {
  const nBotao = req.params.numeroBotao;
  const daimista = getByBotao(Number(nBotao));
  res.send(daimista);
});

server.post("/", (req, res) => {
  const daimista: Daimista = req.body;
  const daimistas = add(daimista);
  res.send(daimistas);
});

server.delete("/:numeroBotao", (req, res) => {
  const nBotao = req.params.numeroBotao;
  const daimistas = remove(Number(nBotao));
  res.send(daimistas);
});

server.patch("/:numeroBotao", (req, res) => {
  const nBotao = req.params.numeroBotao;
  const updates = req.body;
  const updated = update(Number(nBotao), updates);
  res.send(updated);
});

server.listen(8001, () => {
  console.log("Listening on port 8001");
});
