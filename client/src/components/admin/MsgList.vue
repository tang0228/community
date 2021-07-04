<template>
  <div class="msg-list">
    <table border="1">
      <thead>
        <th>留言ID</th>
        <th>留言者昵称</th>
        <th>内容</th>
        <th>留言时间</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="(item, i) in msgList">
          <td>{{ item.id }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.msg }}</td>
          <td>{{ item.createdAt.slice(0, item.createdAt.indexOf("T")) }}</td>
          <td class="operation">
            <button class="del" @click="del(item.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as msgServ from "@/api/msg";
export default {
  data() {
    return {
      msgList: "",
    };
  },
  async created() {
    const resp = await msgServ.getAllMsg();
    this.msgList = resp.data.datas;
  },
  methods: {
    // 删除一条留言
    async del(id) {
      const resp = await msgServ.deleteMsg(id);
      if (resp.data) {
        alert("删除成功");
        const resp = await msgServ.getAllMsg();
        this.msgList = resp.data.datas;
      }
    },
  },
};
</script>

<style scoped>
@import "~@/assets/css/table.css";
</style>