<template>
  <div class="login">
    <p>{{this.$route.meta.titleName}}</p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  mounted(){

  },
}
</script>

<style lang="less" scoped>
.login{
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/No.02.jpg");
}
</style>
