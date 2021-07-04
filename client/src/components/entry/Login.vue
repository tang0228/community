<template>
  <div class="login">
    <div class="login-form">
      <p>
        <label for="homeId">住房编号：</label>
        <input
          type="text"
          id="homeId"
          v-model="homeId"
          placeholder="请输入住房编号或管理员账号"
        />
      </p>
      <p>
        <label for="loginPwd">登陆密码：</label>
        <input
          type="password"
          id="loginPwd"
          v-model="loginPwd"
          placeholder="请输入登录密码"
        />
      </p>
      <p>
        <button @click="login">登录</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeId: "",
      loginPwd: "",
    };
  },
  methods: {
    async login() {
      const resp = await this.$store.dispatch("user/login", {
        homeId: this.homeId,
        loginPwd: this.loginPwd,
      });
      if (resp) {
        this.$router.push({ name: "home" });
        location.reload();
      } else {
        alert("账号密码错误,请重新登录");
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 50vw;
  margin: 0 auto;
  padding: 10px;
}
.login-form {
  width: 100%;
}
.login-form p {
  width: 100%;
  display: flex;
  line-height: 32px;
  justify-content: center;
}
.login-form p label {
  flex-basis: 20%;
  text-align: right;
  margin-right: 20px;
  color: #4e6ef2;
}
.login-form p input {
  flex: 1 1 auto;
  display: block;
  height: 18px;
  padding: 8px;
  border-radius: 4px 4px;
  font-size: 14px;
  color: #4d4d4d;
  border: 1px solid #ccc;
  background-color: #fff;
  background-image: none;
  outline-color: #4e6ef2;
}
button {
  font-size: 18px;
  background-color: #4e6ef2;
  color: #fff;
  border: none;
  padding: 5px 20px;
  border-radius: 10px;
  cursor: pointer;
}
</style>