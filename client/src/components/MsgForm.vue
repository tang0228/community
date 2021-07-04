<template>
  <div class="form">
    <p>
      <label for="username">用户昵称：</label>
      <input type="text" id="username" v-model="username" maxlength="10" />
      <span class="err">{{ err.username }}</span>
      <span class="size">{{ username.length }}/10</span>
    </p>
    <p>
      <label for="msg">留言内容：</label>
      <textarea
        id="msg"
        cols="30"
        rows="10"
        v-model="msg"
        maxlength="300"
      ></textarea>
      <span class="err">{{ err.content }}</span>
      <span class="size">{{ msg.length }}/300</span>
    </p>
    <p>
      <button @click="handleClick">提交留言</button>
    </p>
  </div>
</template>

<script>
import * as msgServ from "@/api/msg";
export default {
  data() {
    return {
      username: "",
      msg: "",
      err: {
        username: "",
        content: "",
      },
    };
  },
  methods: {
    async handleClick() {
      this.err.username = this.username ? "" : "请输入昵称";
      this.err.content = this.msg ? "" : "请输入内容";
      if (!this.username || !this.msg) {
        return;
      }
      const resp = await msgServ.addMsg({
        username: this.username,
        msg: this.msg,
      });
      alert("感谢您的留言♥");
      this.$emit("addMsg", {
        ...resp.data,
      });
      this.username = "";
      this.msg = "";
    },
  },
};
</script>

<style scoped>
.form {
  width: 50%;
  margin: 0 auto;
}
p {
  width: 100%;
  position: relative;
}
label {
  display: inline-block;
  margin-bottom: 5px;
}
p input,
p textarea {
  width: 100%;
  resize: none;
  border: 1px dashed #4e6ef2;
  outline: none;
  border-radius: 10px;
  padding: 5px 10px;
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
.err {
  position: absolute;
  top: 0px;
  left: 76px;
  color: red;
}
.size {
  position: absolute;
  right: -13px;
  bottom: 5px;
  color: #4e6ef2;
}
</style>