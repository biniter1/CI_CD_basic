const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
  res.send('Hello, CI/CD World!');
});
// TEST CASE: Lỗ hổng Command Injection
app.get('/network-lookup', (req, res) => {
  const host = req.query.host;

  // Dòng code này rất nguy hiểm vì nó thực thi trực tiếp input của người dùng
  exec('nslookup ' + host, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send('An error occurred');
    }
    res.send(`<pre>${stdout}</pre>`);
  });
});
// Xuất app để file test có thể sử dụng
module.exports = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});