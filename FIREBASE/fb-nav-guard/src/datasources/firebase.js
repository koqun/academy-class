// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSjwUiJ8wAOyRi_F8JIQDwE6jtv6aKpwk",
  authDomain: "fir-test-login-89e3c.firebaseapp.com",
//   projectId: "fir-test-login-89e3c",
//   storageBucket: "fir-test-login-89e3c.appspot.com",
//   messagingSenderId: "801325053227",
//   appId: "1:801325053227:web:72b1feb2c51be28d4b416e"
};

// Initialize Firebase
// Firebase를 다른 자바스크립트 파일에 작성했으므로 모듈로 쓰기위해 export
export const app = initializeApp(firebaseConfig);