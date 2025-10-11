// إعدادات Firebase لمشروعك
const firebaseConfig = {
  apiKey: "AIzaSyBzB4Hky2iO8FGe_sRz3EfjAfyy4ClgLGQ",
  authDomain: "marvel-75d8b.firebaseapp.com",
  databaseURL: "https://marvel-75d8b-default-rtdb.firebaseio.com",
  projectId: "marvel-75d8b",
  storageBucket: "marvel-75d8b.firebasestorage.app",
  messagingSenderId: "1098663412275",
  appId: "1:1098663412275:web:your-web-app-id" // تحتاج لإضافة تطبيق ويب
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();
