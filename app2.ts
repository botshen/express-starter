import express from 'express';

const app = express();
const port = 3000;

app.get('/xxx', (req, res) => {
  res.send('你好  ss3!');
});
app.post('/xxx', (request, response, next) => {});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});