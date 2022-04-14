<template>
    <div class="dynamicduplicate">
        <h1>This is an dynamic/duplicate page</h1>
        <!-- <h3>{{$route.params.id}}</h3> -->

        <nav>
            <router-link to="/duplicate"></router-link>
        </nav>

        <router-view></router-view>
    </div>

    <!-- error  'DynamicDuplicateView' is not defined  no-undef -->
    <!-- index.js에 해당 컴포넌트를 선언(정의)하지않으면 해당 오류문구가 출력된다 -->
</template>

<script>
export default {
    name:'DynamicDuplicateView',
}
</script>