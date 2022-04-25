<template>
    <div class="page">
        <h3>{{gettitle}}</h3>
        <p>{{getmemo}}</p>
    </div>
</template>

<script>
export default {
    name:"PageView",
    computed:{
        gettitle(){
            return this.$store.state.boardlist[this.$route.params.id-1].title;
        },
        getmemo(){
            return this.$store.state.boardlist[this.$route.params.id-1].memo;
        }
    }
}
</script>