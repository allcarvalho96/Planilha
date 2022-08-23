const express = require('express')
const app = express()

const port = 3000;

app.get('/ola', (req, res) => {
  res.send("ola mundo!")
})

app.use(express.static(`${__dirname}/public`))

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});