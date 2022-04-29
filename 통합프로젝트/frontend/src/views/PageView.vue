<template>
    <div>
        <h1>{{memo.title}}</h1>
        <p>{{memo.memo}}</p>
    </div>
</template>

<script>
export default {
    created() {
        // /api/memo/paramsid를 넣어서 전달
        // memo.id로 구분해서 그 객체만 들고올수있다
        // id값은 어디서 들고올것인가 ?
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response)=> {
            this.memo= response.data;
            console.log(this.memo)
        })
    },
    data() {
        return {
            memo:{

            }
        }
    },
}
</script>