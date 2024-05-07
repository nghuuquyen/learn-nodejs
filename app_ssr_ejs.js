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
  // Sử dụng EJS để render danh sách sản phẩm, dữ liệu được truyền vào qua biến products
  res.render('products_ssr', { products });
});

// Khởi chạy HTTP Server trên cổng 3000
app.listen(3000, () => {
  console.log('Ứng dụng đang lắng nghe trên cổng 3000!');
});