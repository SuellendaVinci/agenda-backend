import { Router } from 'express';

const routes = Router();

routes.get('/contacts', (req, res) => {
    const contacts = [
        {
          name: "Emanuel Diego Rocha",
          city: "Niterói",
          state: "RJ",
        },
        {
          name: "Caroline Isabelle Isabella Nunes",
          city: "Porto Velho",
          state: "RO",
        },
        {
          name: "Pietro Guilherme Moura",
          city: "Aracaju",
          state: "SE",
        },
      ]

      res.status(200).send(contacts);
})

export default routes; 