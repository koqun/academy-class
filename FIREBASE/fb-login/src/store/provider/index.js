// 구글 인증 관련 내용만 따로 작성한 store 모듈

// 파이어베이스 앱 객체 모듈
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

// 라우터 사용을 위한 import
import router from "@/router"

export default {
    state: {
        oUser: null // 사용자 정보를 담을 객체
    },
    mutations: {
        // 사용자 객체 저장
        fnSetUser(state, payload){
            state.oUser = payload;
        }
    },
    getters: {
        // 사용자 객체 반환
        fnGetUser(state){
            return state.oUser;
        },
        // 사용자 객체값의 유무로 로그인 여부 판단
        fnGetAuthStatus(state){
            return state.oUser!= null;
        }
    },
    actions: {
        // 이메일 회원가입 처리
        fnRegisterUser({commit}, payload){
            // store에 시간걸림으로 바꿈
            commit("fnSetLoading", true)
            // firebase에 이메일 회원생성 및 저장
            firebase.auth().createUserWithEmailAndPassword(payload.pEmail, payload.pPassword)
            .then((pUserInfo)=> {
                // 신규회원 이메일 정보를 스토어에 저장
                commit("fnSetUser", {
                    // 7버전은 pUserInfo.email로 접근할수있지만
                    // 9버전은 pUserInfo.user.email을 통해 접근
                    email: pUserInfo.user.email, 
                });
                commit("fnSetLoading", false); // 로딩 끝
                commit("fnSetErrorMessage", "") // store 오류 메시지 없음으로 저장
                router.push("/main")
                })
                .catch((err)=> {
                    commit("fnSetErrorMessage", err.message);
                    commit("fnSetLoading", false);
            })
        },
        fnDoLogin({commit}, payload){
            // 파이어베이스에 이메일 회원 로그인 인증처리
            firebase.auth().signInWithEmailAndPassword(payload.pEmail, payload.pPassword)
            .then((pUserInfo)=> {
                // 로그인이 성공하면 스토어에 계정정보 저장
                commit("fnSetUser", {
                    id: pUserInfo.user.uid,
                    name: pUserInfo.user.displayName,
                    email: pUserInfo.user.email,
                    photoURL: pUserInfo.user.photoURL,
                });
                commit("fnSetLoading", false);
                commit("fnSetErrorMessage", "");
                router.push("/main");
            })
            .catch((err)=> {
                commit("fnSetErrorMessage", err.message);
                commit("fnSetLoading", false);
            });
        },
        // 구글 계정 회원 로그인 (팝업)
        fnDoGoogleLogin_Popup({commit}){
            // 파이어베이스에 구글회원 로그인 인증처리요청
            // 로그인 제공자 객체 셍성
            const oProvider= new firebase.auth.GoogleAuthProvider();
            // 오픈 계정의 범위(가져오는 값)
            oProvider.addScope("profile");
            oProvider.addScope("email");
            
            // 로그인 요청
            firebase.auth().signInWithPopup(oProvider)
            .then((pUserInfo)=> {
                // 로그인 성공시 store에 계정정보 저장
                commit("fnSetUser", {
                    id: pUserInfo.user.uid,
                    name: pUserInfo.user.displayName,
                    email: pUserInfo.user.email,
                    photoURL: pUserInfo.user.photoURL,
                });
                commit("fnSetLoading", false);
                commit("fnSetErrorMessage", "");
                router.push("/main");
            })
            .catch((err)=> {
                commit("fnSetErrorMessage", err.message);
                commit("fnSetLoading", false);
            })
        },
        // 로그아웃
        fnDoLogout({commit}){
            firebase.auth().signOut();
            commit("fnSetUser", null);
            router.push("/");
        },
        // 회원탈퇴
        fnDoDelete({commit}){
            // 파이어베이스에 회원탈퇴를 요청
            const user = firebase.auth().currentUser;
            user.delete()
            .then(()=> {
                // store의 회원에 빈값을 넣음
                commit("fnSetUser", null);
                router.push('/');
            }).catch((err)=> {
                console.log(err)
            })
        },
        // 자동 로그인 처리
        fnDoLoginAuto({commit}, pUserInfo){
            commit("fnSetUser", {
                id: pUserInfo.uid,
                name: pUserInfo.displayName,
                email: pUserInfo.email,
                photoURL: pUserInfo.photoURL
            });
            commit("fnSetLoading", false);
            commit("fnSetErrorMessage", "");
        }
    }
}