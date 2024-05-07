const express = require('express');

const app = express();

// Thiết lập View Engine sử dụng EJS
app.set('view engine', 'ejs');

// Một danh sách sản phẩm giả định
const products = [
  { id: 1, name: 'Sản phẩm 1', price: 10 },
  { id: 2, name: 'Sản phẩm 2', price: 20 },
  { id: 3, name: 'Sản phẩm 3', price: 30 }
];

// Định nghĩa route để trả về danh sách sản phẩm dưới dạng HTML
app.get('/products', (req, res) => {
  res.render('products_csr_dom_interaction');
});

// API lấy dữ liệu sản phẩm
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API search sản phẩm
app.get('/api/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase();

  const searchResults = products.filter(product =>
    product.name.toLowerCase().includes(keyword)
  );

  res.json(searchResults);
});

// Khởi chạy HTTP Server trên cổng 3000
app.listen(3000, () => {
  console.log('Ứng dụng đang lắng nghe trên cổng 3000!');
});