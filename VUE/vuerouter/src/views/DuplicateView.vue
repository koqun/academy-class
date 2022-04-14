<template>
  <div class="duplicate">
    <h1>This is an duplicate page</h1>
    <p>두개의 컴포넌트를 라우팅</p>
    
    <nav>
      <router-link to="/duplicate/1">1</router-link> | 
      <router-link to="/duplicate/2">2</router-link>  
    </nav>
    <router-view></router-view>
  </div>
  <!-- error  The template root requires an element rather than texts  vue/no-multiple-template-root -->
  <!-- 구성 요소 템플릿은 정확히 하나의 루트 요소를 포함해야 합니다. 여러 요소에서 v-if를 사용하는 경우 대신 v-else-if를 사용하여 요소를 연결하십시오. -->

  <!-- nav와 같은 영역 안에 router-view가 선언되어야 제대로 출력된다. -->


</template>

<script>
export default {
    name:'DuplicateView',
}
</script>