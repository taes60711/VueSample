<template>
  <div>
   MainPage
  </div>
   <button @click="toHelloWorld">toHelloWorld</button>
</template>

<script>
export default {
  name: "MainPage",
   methods: {
    toHelloWorld: function () {
      this.$router.push({
        name: "HelloWorld",
        params: { user: "taro", age: 33 },
      });
    }
  }
};
</script>

<style scoped>
</style>
