const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware untuk parsing JSON
app.use(express.json());
// Route dasar
app.get('/', (req, res) => {
  res.send('Halo dari dari dari !');
});
// Contoh route tambahan
app.get('/api/data', (req, res) => {
  res.json({ message: 'Ini adalah data dari API' });
  app.get('/api/data', (req, res) => {
  res.json({ message: 'Ini adalah data dari API' });
});
// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});



