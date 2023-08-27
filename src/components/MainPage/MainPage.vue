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
      this.$router.push({ name: 'HelloWorld' })
    }
  }
};
</script>

<style scoped>
</style>
