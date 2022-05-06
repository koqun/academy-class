<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center my-5">
                <h1>회원가입 페이지</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8" class="text-center">
                <form @submit.prevent="fnRegisterUser">
                    <v-text-field name="email" label="이메일" type="email" v-model="sEmail" required></v-text-field>
                    <v-text-field name="password" label="비밀번호" type="password" v-model="sPassword" required></v-text-field>

                    <!-- 비밀번호 확인 : rules 속성 -->
                    <v-text-field name="confirmpassword" label="비밀번호 확인" type="password" 
                    v-model="sConfirmPassword" required 
                    :rules="[fnComparePassword]"></v-text-field>

                    <v-btn type="submit" color="orange" dark v-if="!loading">회원가입</v-btn>

                    <v-progress-circular v-if="loading"
                    color="grey lighten-1" :width="7" :size="70" 
                    indeterminate>
                    </v-progress-circular>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            loading:false,

            sEmail:"",
            sPassword:"",
            sConfirmPassword:""
        }
    },
    computed: {
        fnComparePassword(){
            if(this.sPassword == this.sConfirmPassword){
                return true
            } else {
                return "비밀번호가 일치하지 않습니다"
            }
        }
    },
    methods: {
        fnRegisterUser() {
            if(this.fnComparePassword == true){
                this.$store.dispatch("fnRegisterUser", {
                    pEmail: this.sEmail,
                    pPassword: this.sPassword
                })
            }
        }
    },
}
</script>