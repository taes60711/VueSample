<template>
  <div class="hello">
    <button @click="toMainPage">toMainPage</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted:function (){
    console.log(this.$route.params)
  },
  methods: {
    toMainPage: function () {
      this.$router.push({
        name: "MainPage",
      });
    },
  },
};
</script>

<style scoped>
</style>
