<template>
  <div class="nav">
    <ul>
      <li><RouterLink :to="{ name: 'login' }">登录</RouterLink></li>
      <li><RouterLink :to="{ name: 'register' }">注册</RouterLink></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  width: 50vw;
  margin: 10px auto 0;
}
ul {
  display: flex;
}
li {
  margin-right: 20px;
}
li a.router-link-active {
  color: #4e6ef2;
  font-weight: bold;
}
li a.router-link-active::after {
  content: "";
  display: inline-block;
  width: 100%;
  height: 2px;
  background-color: #4e6ef2;
}
</style>