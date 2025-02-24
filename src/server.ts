import express, { Request, Response } from 'express';

const app = express();
const PORT = 3333;
app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
