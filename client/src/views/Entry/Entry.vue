<template>
  <div class="entry">
    <Header />
    <Nav />
    <RouterView />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/entry/Nav.vue";
export default {
  components: {
    Header,
    Nav,
  },
};
</script>

<style>
</style>