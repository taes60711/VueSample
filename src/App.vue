<template>
  <UserData
  ></UserData>
</template>
<script>
import UserData from './Components/UserData.vue'

export default {
  name: "App",
  components: {
    UserData
  },
  methods: {
    toMainPage: function () {
      this.$router.push({ name: "MainPage" });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
