// Import Express module
const express = require('express');

// Khởi tạo ứng dụng Express
const app = express();

// Định nghĩa route chính
app.get('/', (req, res) => {
    res.send('Chào mừng đến với ứng dụng web đơn giản của chúng tôi!');
});

// Khởi chạy HTTP Server trên cổng 3000
app.listen(3000, () => {
    console.log('Ứng dụng đang lắng nghe trên cổng 3000!');
});