const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, CI/CD World!');
});

// Xuất app để file test có thể sử dụng
module.exports = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});