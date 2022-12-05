import express, { Express } from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
