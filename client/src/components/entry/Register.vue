<template>
  <div class="register">
    <div class="register-form">
      <p>
        <label for="homeId">住房编号：</label>
        <input type="text" id="homeId" v-model="homeId" />
      </p>
      <p>
        <label for="loginPwd">登陆密码：</label>
        <input type="password" id="loginPwd" v-model="loginPwd" />
      </p>
      <p>
        <label for="userName">业主姓名：</label>
        <input type="text" id="userName" v-model="userName" />
      </p>
      <p class="sex">
        <label for="sex">性别：</label>
        <input
          type="radio"
          name="sex"
          value="1"
          id="sex"
          v-model="sex"
        />男<br />
        <input type="radio" name="sex" value="0" id="sex" v-model="sex" />女
      </p>
      <p>
        <label for="profession">职业：</label>
        <input type="text" id="profession" v-model="profession" />
      </p>
      <p>
        <label for="entryTime">入住时间：</label>
        <input type="date" id="entryTime" v-model="entryTime" />
      </p>
      <p>
        <label for="homeSize">住房面积：</label>
        <input type="number" id="homeSize" v-model="homeSize" />
      </p>
      <p>
        <label for="peoples">常住人口数：</label>
        <input type="number" id="peoples" v-model="peoples" />
      </p>
      <p>
        <label for="mobile">联系电话：</label>
        <input type="text" id="mobile" v-model="mobile" />
      </p>
      <p>
        <button @click="register">注册</button>
      </p>
    </div>
  </div>
</template>

<script>
import * as userServ from "../../api/user";
export default {
  data() {
    return {
      homeId: "",
      loginPwd: "",
      userName: "",
      sex: "",
      profession: "",
      entryTime: "",
      homeSize: "",
      peoples: "",
      mobile: "",
    };
  },
  methods: {
    async register() {
      const resp = await userServ.register({
        homeId: this.homeId,
        loginPwd: this.loginPwd,
        userName: this.userName,
        sex: this.sex ? true : false,
        profession: this.profession,
        entryTime: this.entryTime,
        homeSize: this.homeSize,
        peoples: this.peoples,
        mobile: this.mobile,
        role: 'user'
      })
      if (resp) {
        alert("注册成功,请登录");
      } else {
        alert("内容输入错误");
      }
    },
  },
};
</script>

<style scoped>
.register {
  width: 50vw;
  margin: 0 auto;
}
.register-form {
  width: 100%;
}
.register-form p {
  width: 100%;
  display: flex;
  line-height: 32px;
  justify-content: center;
}
.register-form p label {
  flex-basis: 20%;
  text-align: right;
  margin-right: 20px;
  color: #4e6ef2;
}
.register-form p input {
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
p.sex {
  justify-content: flex-start;
}
p.sex input {
  flex-grow: 0;
  align-items: center;
}
</style>