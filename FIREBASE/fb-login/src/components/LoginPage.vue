<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center my-5">
                <h1>로그인 페이지</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8" class="text-center">
                <form @submit.prevent="fnDoLogin">
                    <v-text-field name="email" label="이메일" type="email" required></v-text-field>
                    <v-text-field name="password" label="비밀번호" type="password" required></v-text-field>
                    <v-btn type="submit" color="orange" dark v-if="!loading">로그인</v-btn>

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
            sPassword:""
        }
    },
    methods: {
        fnDoLogin(){
            this.$store.dispatch("fnDoLogin", {
                pEmail: this.sEmail,
                pPassword: this.sPassword
            })
        }
    }
}
</script>