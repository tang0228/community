<template>
  <div class="user-list">
    <table border="1">
      <thead>
        <th>住房编号</th>
        <th>业主姓名</th>
        <th>性别</th>
        <th>职业</th>
        <th>入住时间</th>
        <th>住房面积</th>
        <th>常住人口数</th>
        <th>联系电话</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="(item, i) in userList">
          <td>{{ item.homeId }}</td>
          <td>{{ item.userName }}</td>
          <td>{{ item.sex ? "男" : "女" }}</td>
          <td>{{ item.profession }}</td>
          <td :title="item.entryTime">
            {{ item.entryTime.slice(0, item.entryTime.indexOf("T")) }}
          </td>
          <td>{{ item.homeSize }}</td>
          <td>{{ item.peoples }}</td>
          <td>{{ item.mobile }}</td>
          <td class="operation">
            <button class="edit" @click="edit(item)">编辑</button>
            <button class="del" @click="del(item.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="edit-form" v-show="editing">
      <p>
        <label for="homeId">住房编号：</label>
        <input type="text" id="homeId" v-model="userData.homeId" />
      </p>
      <p>
        <label for="loginPwd">登陆密码：</label>
        <input type="password" id="loginPwd" v-model="userData.loginPwd" />
      </p>
      <p>
        <label for="userName">业主姓名：</label>
        <input type="text" id="userName" v-model="userData.userName" />
      </p>
      <p class="sex">
        <label for="sex">性别：</label>
        <input type="text" id="sex" v-model="userData.sex ? '男' : '女'" />
      </p>
      <p>
        <label for="profession">职业：</label>
        <input type="text" id="profession" v-model="userData.profession" />
      </p>
      <p>
        <label for="entryTime">入住时间：</label>
        <input type="text" id="entryTime" v-model="userData.entryTime" />
      </p>
      <p>
        <label for="homeSize">住房面积：</label>
        <input type="number" id="homeSize" v-model="userData.homeSize" />
      </p>
      <p>
        <label for="peoples">常住人口数：</label>
        <input type="number" id="peoples" v-model="userData.peoples" />
      </p>
      <p>
        <label for="mobile">联系电话：</label>
        <input type="text" id="mobile" v-model="userData.mobile" />
      </p>
      <p>
        <button class="commit" @click="commit">提交修改</button>
      </p>
    </div>
    <div class="cancel" v-show="editing" @click="cancel">x</div>
  </div>
</template>

<script>
import * as userServ from "@/api/user";
export default {
  data() {
    return {
      userList: "",
      editing: false,
      userData: {
        homeId: "0",
        loginPwd: "0",
        userName: "0",
        sex: "0",
        profession: "0",
        entryTime: "0",
        homeSize: "0",
        peoples: "0",
        mobile: "0",
      },
    };
  },
  async created() {
    const resp = await userServ.getAllUser();
    this.userList = resp.data.datas.filter((item) => {
      return item.role === "user";
    });
  },
  methods: {
    // 编辑用户信息
    edit(item) {
      this.editing = true;
      this.userData = item;
    },
    // 删除用户
    async del(id) {
      const resp = await userServ.deleteUser(id);
      if (resp.data) {
        alert("删除成功");
        const resp = await userServ.getAllUser();
        this.userList = resp.data.datas;
      }
    },
    cancel() {
      this.editing = false;
    },
    async commit() {
      const resp = await userServ.updateUserIfo(this.userData.id, {
        homeId: this.userData.homeId,
        // loginPwd: this.personDate.loginPwd,
        userName: this.userData.userName,
        sex: this.userData.sex,
        profession: this.userData.profession,
        entryTime: this.userData.entryTime,
        size: this.userData.size,
        peoples: this.userData.peoples,
        mobile: this.userData.mobile,
        homeSize: this.userData.homeSize,
      });
      if (resp) {
        alert("修改成功");
        this.editing = false;
      }
    },
  },
};
</script>

<style scoped>
@import "~@/assets/css/table.css";
.user-list {
  position: relative;
}
.edit-form {
  position: absolute;
  top: 20px;
  left: 50%;
  width: 50%;
  transform: translate(-50%, 0%);
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 2px 3px #123456, -1px 2px 3px #123456, 0px -2px 3px #123456;
}
.edit-form p {
  display: flex;
  justify-content: center;
}
p label {
  flex-basis: 20%;
  text-align: right;
}
p input {
  flex-basis: 70%;
  display: block;
  padding: 7px;
  border-radius: 4px 4px;
  font-size: 14px;
  color: #4d4d4d;
  border: 1px solid #ccc;
  background-color: #fff;
  background-image: none;
  outline-color: #4e6ef2;
}
button.commit {
  font-size: 18px;
  background-color: #4e6ef2;
  color: #fff;
  border: none;
  padding: 5px 20px;
  border-radius: 10px;
  cursor: pointer;
}
div.cancel {
  position: absolute;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  right: 200px;
  top: 300px;
  font-size: 30px;
  border-radius: 50%;
  background-color: #fff;
  color: #4e6ef2;
  cursor: pointer;
}
</style>