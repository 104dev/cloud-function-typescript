import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.post('/post', (req, res) => {
  const { title, content } = req.body;
  res.status(201).send({ title, content });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
