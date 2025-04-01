import { useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState('');
  const [response, setResponse] = useState('');

  const sendToBackend = async () => {
    const res = await fetch('https://emporiglobe-automation-1.onrender.com/process-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        product_name: product,
        price: "$79",
        description: "Auto-description via GPT soon..."
      })
    });

    const data = await res.json();
    setResponse(data.preview);
  };

  return (
    <div className="app">
      <h1>📦 Product Post Generator</h1>
      <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Product name..." />
      <button onClick={sendToBackend}>Send to GPT</button>
      <p>{response}</p>
    </div>
  );
}

export default App;
