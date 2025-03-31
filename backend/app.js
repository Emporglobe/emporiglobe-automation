const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const fs = require('fs');
const flow = JSON.parse(fs.readFileSync('./EmporiGlobe_Flow.json', 'utf-8'));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('EmporiGlobe Automation Backend is Live!');
});

app.get('/flow', (req, res) => {
  res.json(flow);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
