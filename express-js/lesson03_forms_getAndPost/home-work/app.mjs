import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 5555;

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'registor.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/reg', (req, res) => {
  res.sendFile(`${__dirname}/public/registor.html`);
});

app.get('/start', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/registor.html`);
});

app.post('/register', (req, res) => {
  // Получаем данные из запроса
  const { name, surname, email, password } = req.body;

  // Создаем объект с данными о пользователе
  const clientUser = {
    name: name,
    surname: surname,
    email: email,
    password: password
  };

  // Отправляем ответ после получения данных из тела запроса
  res.send('POST request to the register page');
});