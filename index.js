const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const jogos = [
  "Jogo 1",
  "Jogo 2",
  "Jogo 3",
  "Jogo 4",
  "Jogo 5",
];

// GET
app.get('/',(req,res)=> {
  res.send('Seja Bem vindo a nossa biblioteca de jogos!');
});

app.get('/jogos',(req,res)=>{
  res.send(jogos);
});

app.get("/jogos/:id", (req,res)=>{
  const id = req.params.id-1;
  const jogo = jogos[id];
  if(!jogo){
    res.send("Jogo não encontrado")
  }
  res.send(jogo)
});

// POST
app.post("/jogos",(req,res)=>{
  const jogo = req.body.jogo;
  const id = jogos.length;

  jogos.push(jogo);
res.send(`Jogo adicionado com sucesso: ${jogo}. ID do jogo é ${id+1}`)
});


// PUT
app.put("/jogos/:id", (req,res)=>{
  const id = req.params.id-1;
  const jogo = req.body.jogo;
  let jogoAnterior = jogos[id]
  jogos[id] = jogo;
  res.send(`Jogo atualizado com sucesso: Mudou de ${jogoAnterior} para '${jogo}'.`)
});


// DELETE
app.delete("/jogos/:id", (req,res)=>{
  const id = req.params.id-1;
  let jogoAnterior = jogos[id]
  jogos.splice(id,1);
  res.send(`O jogo '${jogoAnterior}' foi excluido da biblioteca`)
});


app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`)
});