<template>
  <div class="left-nav">
    <ul class="nav">
      <template v-if="$store.state.user.role ==='user'">
        <li class="item">
          <RouterLink :to="{ name: 'personFee' }">个人物业费</RouterLink>
        </li>
        <li class="item">
          <RouterLink :to="{ name: 'person' }">个人信息</RouterLink>
        </li>
        <li class="item">
          <RouterLink :to="{ name: 'message' }">留言板</RouterLink>
        </li>
      </template>
      <template v-if="$store.state.user.role === 'admin'">
        <li class="item">
          <RouterLink :to="{ name: 'userList' }">业主列表</RouterLink>
        </li>
        <li class="item">
          <RouterLink :to="{ name: 'feeList' }">费用清单列表</RouterLink>
        </li>
        <li class="item">
          <RouterLink :to="{ name: 'msgList' }">留言列表</RouterLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.left-nav {
  width: 100%;
  height: 100%;
  background: url(../../assets/home.png);
  opacity: 0.5;
}
.nav {
  width: 100%;
}
.item {
  line-height: 20px;
}
.item a {
  display: inline-block;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
}
.item a.router-link-exact-active {
  width: 100%;
  display: inline-block;
  color: #4e6ef2;
  box-sizing: border-box;
}
</style>