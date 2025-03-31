// ✅ EmporiGlobe Backend – vFinal

const express = require('express');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

// Load JSON flow config
const flow = JSON.parse(fs.readFileSync('./EmporiGlobe_Flow.json', 'utf-8'));

// Middleware
app.use(express.json());

// Root check
app.get('/', (req, res) => {
  res.send('EmporiGlobe Automation Backend is Live!');
});

// Serve Flow
app.get('/flow', (req, res) => {
  res.json(flow);
});

// POST /process-product → test GPT + email
app.post('/process-product', (req, res) => {
  const { product_name, price, description } = req.body;

  console.log("📦 Product received:", product_name, price, description);

  // Simulated AI post & email preview
  res.json({
    status: "✅ Product processed successfully",
    preview: `Post: ${product_name} – ${description} – Only ${price}`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
