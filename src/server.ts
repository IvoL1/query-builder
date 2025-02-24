import express, { Request, Response } from 'express';
import { knex } from './database/knex';

const app = express();
const PORT = 3333;
app.use(express.json());

app.post('/courses', async (req: Request, res: Response) => {
  const { name } = req.body;

  await knex('courses').insert({
    name: name,
  });
  res.status(201).json({ name });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
