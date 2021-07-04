<template>
  <div class="person">
    <p>
      <label for="homeId">住房编号：</label>
      <input type="text" id="homeId" v-model="personData.homeId" />
    </p>
    <p>
      <label for="loginPwd">登陆密码：</label>
      <input type="password" id="loginPwd" v-model="personData.loginPwd" />
    </p>
    <p>
      <label for="userName">业主姓名：</label>
      <input type="text" id="userName" v-model="personData.userName" />
    </p>
    <p>
      <label for="sex">性别：</label>
      <input type="text" id="sex" v-model="personData.sex ? '男' : '女'" />
    </p>
    <p>
      <label for="profession">职业：</label>
      <input type="text" id="profession" v-model="personData.profession" />
    </p>
    <p>
      <label for="entryTime">入住时间：</label>
      <input type="text" id="entryTime" v-model="personData.entryTime" />
    </p>
    <p>
      <label for="homeSize">住房面积：</label>
      <input type="number" id="homeSize" v-model="personData.homeSize" />
    </p>
    <p>
      <label for="peoples">常住人口数：</label>
      <input type="number" id="peoples" v-model="personData.peoples" />
    </p>
    <p>
      <label for="mobile">联系电话：</label>
      <input type="text" id="mobile" v-model="personData.mobile" />
    </p>
    <p>
      <button @click="edit">编辑</button>
    </p>
  </div>
</template>

<script>
import * as userServ from "@/api/user";
import { filterObj } from "@/util/index.js";
export default {
  data() {
    return {
      personData: null,
      id: "",
    };
  },
  created() {
    this.personData = filterObj(this.$store.state.user.user, [
      "id",
      "deletedAt",
    ]);
    this.id = this.$store.state.user.user.id;
  },
  methods: {
    async edit() {
      const res = await userServ.updateUserIfo(this.id, {
        homeId: this.personData.homeId,
        // loginPwd: this.personDate.loginPwd,
        userName: this.personData.userName,
        sex: this.personData.sex,
        profession: this.personData.profession,
        entryTime: this.personData.entryTime,
        peoples: this.personData.peoples,
        mobile: this.personData.mobile,
        homeSize: this.personData.homeSize
      });
      if (res.data) {
        const res = await userServ.getUserIfo(this.id);
        localStorage.setItem("user", JSON.stringify(res.data));
        alert("修改成功");
      }
    },
  },
};
</script>

<style scoped>
.person p {
  width: 100%;
  display: flex;
  line-height: 32px;
  justify-content: center;
}
.person p label {
  flex-basis: 20%;
  text-align: right;
  margin-right: 20px;
  color: #4e6ef2;
}
.person p input {
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