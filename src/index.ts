import { app } from "./app";

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("pereirete");
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
