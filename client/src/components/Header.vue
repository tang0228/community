<template>
  <div class="header">
    <div class="img">
      <img src="../assets/home.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100vw;
  height: 130px;
}
.img {
  position: relative;
  width: 100%;
  height: 130px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img::after {
  content: "社区物业在线管理信息系统";
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ccc;
  font-weight: bold;
  background-image: url(https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2687048359,165477934&fm=26&gp=0.jpg);
  background-position: -300px -50px;
  /* 图片剪切文字，文字成为背景图片的一部分，文字阴影会在背景图片的上面 */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 5px 5px 1px rgba(255, 0, 255, 0.3), rgba(0, 255, 255, 0.2);
  transition: all 2s;
}
.img:hover::after {
  background-position: 0 -50px;
}
</style>