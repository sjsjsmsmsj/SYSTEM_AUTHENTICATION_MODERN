# Backend
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

# FrontEnd
- Tạo dự án: npm create vite@latest .
- Các thư viện cần thiết: npm i react-router axios lucide-react tailwindcss @tailwindcss/vite tailwindcss-animate zustand zod react-hook-form @hookform/resolvers sonner
- npm i -D @types/node
- npx shadcn@latest init

- Thư mục store dùng để lưu trữ các state 
- Thư mục services dùng để gọi api 
- libs chứa axios chứa định nghĩa api cố định 
- Còn phần dynamic phía sau thì lưu ở Services