<template>
  <div class="msg-list">
    <h2>
      留言板:<span class="num">{{ count }}条评论</span>
    </h2>
    <ul>
      <li v-for="(item, i) in list" :key="i">
        <span>{{ item.username }}：</span>
        <p>{{ item.msg }}</p>
        <span class="time">{{item.createdAt.slice(0,item.createdAt.indexOf('T'))}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["count", "list"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.msg-list {
    width: 50%;
    margin: 0 auto;
}
.num {
    font-weight: normal;
    font-size: 20px;
    color: #666;
    margin-left: 10px;
}
ul {
    width: 100%;
}
li {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    align-items: center;
    position: relative;
}
li span {
    font-size: 16px;
    font-weight: 450;
    color: #4e6ef2;
}
li p {
    margin-left: 10px;
    font-size: 14px;
}
li:hover {
    background-color: #4e6ef2;
    color: #fff;
}
li:hover span {
    color: #fff;
}
span.time {
    position: absolute;
    top: 26px;
    right: 0;
    color: #bbb;
}
</style>