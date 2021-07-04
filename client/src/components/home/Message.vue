<template>
  <div class="message">
    <MsgForm @addMsg="handleAddMsg" />
    <MsgList :count="count" :list="list" />
  </div>
</template>

<script>
import MsgList from "../MsgList.vue";
import MsgForm from "../MsgForm.vue";
import * as msgServ from "@/api/msg";
export default {
  data() {
    return {
      count: "",
      list: "",
    };
  },
  components: {
    MsgForm,
    MsgList,
  },
  async created() {
    const resp = await msgServ.getAllMsg();
    this.count = resp.data.count;
    this.list = resp.data.datas;
  },
  methods: {
    handleAddMsg(value) {
      this.count += 1;
      this.list.unshift({
        ...value
      });
    },
  },
};
</script>

<style scoped>
</style>