-  JWT (Json web token)
+ Header: chứa thông tin về loại token(Thuật toán được sử dụng)
+ Payload: Chứa thông tin người dùng, quyền hạn(authorization)
+ Signature: như là một khóa bí mật 

- Tạo dự án 
- cd backend
- Lệnh khởi tạo dự án: npm init -y
- Những thư viện cần thiết: 
npm i express cors mongoose dotenv
npm i nodemon
npm i jsonwebtoken bcrypt cookie-parser


- Lấy access Token: 
- node 
= require('crypto').randomBytes(64).toString('hex')
