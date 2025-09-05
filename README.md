# project-unitrade
ติดตั้ง packages ที่จำเป็น (Frontend)
npm install
npm install react-router-dom axios formik yup react-icons tailwindcss @headlessui/react
npm install firebase
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

อย่าพึงรันนะ
สร้างโปรเจค Backend
mkdir server
cd server
npm init -y
npm install express mongoose dotenv cors bcrypt jsonwebtoken multer helmet morgan
npm install nodemon -D

ถ้าจะรันbackend
cdเข้าserverไปก่อน
ค่อยnpm run dev
ถ้าจะรัน frontend
ไม่ต้องไปไหน
ให้pathอยู่หน้าเเรกเเล้ว npm run dev

จะเชื่ิอม mongodbเก็บฐานข้อมูล
จะเชื่อม fisebase เพื่อเก็บรูปภาพ
project-unitrade/
├── client/                     # Frontend (React Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/             # รูปภาพ, ไฟล์ static
│   │   ├── components/         # Reusable components
│   │   ├── contexts/           # React contexts (Auth, Cart, etc.)
│   │   ├── hooks/              # Custom hooks
│   │   ├── pages/              # หน้าต่างๆ ของแอป
│   │   ├── services/           # API services
│   │   ├── utils/              # Utility functions
│   │   ├── App.jsx             # Main App component
│   │   ├── main.jsx            # Entry point
│   │   └── routes.jsx          # Router configuration
│   └── package.json
│
├── server/                     # Backend (Express, MongoDB)
│   ├── config/                 # Configuration files
│   ├── controllers/            # Route controllers
│   ├── middleware/             # Middleware functions
│   ├── models/                 # MongoDB models
│   ├── routes/                 # API routes
│   ├── utils/                  # Utility functions
│   ├── index.js                # Entry point
│   └── package.json
│
└── README.md