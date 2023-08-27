<template>
  <div class="hello">
    <button @click="toMainPage">toMainPage</button>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",

  methods: {
    toMainPage: function () {
      this.$router.push({ name: "MainPage" });
    },

  },
};
</script>

<style scoped>
</style>
