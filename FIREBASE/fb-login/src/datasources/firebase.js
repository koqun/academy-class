// 파이어베이스 앱 객체 모듈 가져오기
// 파이어베이스 9버전이므로, 아래 compat을 추가
import firebase from "firebase/compat/app";

// 파이어베이스 초기화
const oFirebase = firebase.initializeApp ({
  apiKey: "AIzaSyA0Oo9hQs_6n2DHZaXxvxIe3ZJoRp9vWU0",
  authDomain: "login-c2c82.firebaseapp.com",
});

export const oFirebaseAuth = oFirebase.auth();