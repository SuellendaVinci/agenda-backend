const PORT = 3333;
const express = require('express');

const app = express();
app.use(express.json());

app.get('/contacts', (req, res) => {
    res.status(200).send(
        [
        {
          name: "Emanuel Diego Rocha",
          city: "Niterói",
          state: "RJ"
        },
        {
          name: "Caroline Isabelle Isabella Nunes",
          city: "Porto Velho",
          state: "RO"
        },
        {
          name: "Pietro Guilherme Moura",
          city: "Aracaju",
          state: "SE"
        },
      ]);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})