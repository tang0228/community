<template>
  <div class="home">
    <div class="top">
      <Header />
    </div>
    <div class="container">
      <div class="left">
        <LeftNav />
      </div>
      <div class="right">
        <div class="user">
          <span>{{ $route.meta.title ? $route.meta.title : 'hello' }}</span>
          <ul>
            <li class="name">{{ `欢迎您:${user.userName}` }}</li>
            <li class="out" @click="logon">退出登录</li>
          </ul>
        </div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftNav from "@/components/home/LeftNav.vue";
import { mapState } from "vuex";
import * as userServ from "@/api/user";
export default {
  components: {
    LeftNav,
    Header,
  },
  computed: mapState("user", ["user"]),
  methods: {
    async logon() {
      await userServ.loginOut();
      this.$router.push({ name: "entry" });
    },
  },
};
</script>

<style scoped>
.home {
  width: 100vw;
}
.top {
  overflow: hidden;
  height: 129px;
}
.container::after {
  content: "";
  display: block;
  clear: both;
}
.left {
  float: left;
  width: 200px;
  height: calc(100vh - 129px);
}
.right {
  float: right;
  width: calc(100vw - 200px);
  height: calc(100vh - 129px);
  padding: 5px 10px;
  box-sizing: border-box;
  overflow-y: scroll;
}
.user {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 5px;
  position: relative;
}
ul {
  position: absolute;
  top: 0;
  right: 15px;
  z-index: 20;
}
li {
  height: 30px;
  text-align: center;
  line-height: 30px;
}
li.out {
  background-color: #4e6ef2;
  color: #fff;
  cursor: pointer;
  display: none;
}
ul:hover li.out {
  display: block;
}
</style>