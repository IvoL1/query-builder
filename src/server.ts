import express, { Request, Response } from "express";
import { knex } from "./database/knex";

const app = express();
const PORT = 3333;
app.use(express.json());

app.post("/courses", async (req: Request, res: Response) => {
  const { name } = req.body;

  await knex("courses").insert({
    name: name,
  });
  res.status(201).json({ name });
});

app.get("/courses", async (req: Request, res: Response) => {
  // const courses = await knex.raw('SELECT * FROM courses') usando comandos SQL
  const courses = await knex("courses").select();
  res.json(courses);
});

app.put("/courses/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  await knex("courses").update({ name }).where({ id });
  res.json();
});

app.delete("/courses/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await knex("courses").delete().where({ id });
  res.json();
});

app.post("/modules", async (req: Request, res: Response) => {
  const { course_id, name } = req.body;
  await knex("course_modules").insert({ name, course_id });
  res.status(201).json();
});

app.get("/modules", async (req: Request, res: Response) => {
  const courses = await knex("course_modules").select();
  res.json(courses);
});

app.delete("/modules/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await knex("course_modules").delete().where({ id });
  res.json();
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
