'use strict';
const rootDir = './resources';
const express = require('express');
const app = express();
app.use(express.static(rootDir));
app.listen(8001, () => {
  console.log('Express server');
});
