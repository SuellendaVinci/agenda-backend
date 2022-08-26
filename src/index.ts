const PORT = 3333;
import express from "express";
import cors from "cors";
import routes from "./routes";
import { AppDataSource } from "./configs/db";

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
