<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center mt-5">
                <h1 class="display-1 my-1">로그인 후 화면 페이지</h1>
                <p class="">로그인을 통해 인증된 사용자가 방문한 페이지입니다.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="10" offset="1" class="text-center mt-5">
                <!-- 구글 로그인인 경우 계정 프로필 이미지 표시 -->
                <img v-if="fnGetUser.photoURL" :src="fnGetUser.photoURL" class="avatar_style" alt="">
                <!-- 계정 프로필 이름 표시 -->
                <h3 class="pt-2 mt-4 grey lighten-2">{{fnGetUser.name}}</h3>
                <!-- 계정 이메일 표시 -->
                <p class="pb-2 grey lighten-2">{{fnGetUser.email}}</p>
            </v-col>
            <v-col cols="6" offset="3" class="text-center mt-1">
                <v-btn color="orange" large dark block>
                    <v-icon>mdi-email</v-icon>
                    비밀번호 재설정
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { oFirebaseAuth } from '@/datasources/firebase'

export default {
    computed:{
        fnGetUser(){
            let oUserInfo = this.$store.getters.fnGetUser
            return oUserInfo
        }
    },
    methods: {
        fnSendPasswordReset(){
            // 비밀번호 재설정 메일 발송하기
            oFirebaseAuth.sendPasswordResetEmail(this.fnGetUser.email)
            .then(()=> {
                console.log("비밀번호 재설정 메일을 발송하였습니다")
            })
            .catch((err)=> {
                console.log(err);
            })
        }
    },
}
</script>