<template>
    <div class="dynamic">
        <h1>This is an dynamic page</h1>
        <h3>{{$route.params.id}}</h3>
    </div>

</template>

<script>
export default {
    name:'DynamicView'
}
</script>