const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// 告訴伺服器從當前目錄提供靜態檔案
app.use(express.static(__dirname));

// 所有請求都指向 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`GreenCart is running on port ${port}`);
});
