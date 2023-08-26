<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="get()">FireBase</button>
    <button @click="click()">Class</button>
  </div>
</template>

<script>
import {firesotre} from "/src/Service/firebaseService.js";
import { users } from "./HelloWorldClass.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {

    //class
    click() {
      const userClass = new users();
      console.log(userClass.getUser());
      console.log(userClass.setUser( { Id: "asdsad", born: "boqweqwrn", first: "fisadasdrst", last: "laasdsadst" }))
      console.log(userClass.getUser());
    },

    //firebase
    get: async function () {
      const userRef = firesotre.collection("users");
      const userDoc = await userRef.get();

      //リストに全データ取得する
      let getAllData = userDoc.docs.map((doc) => {
        return doc.data();
      });
      console.log(getAllData);

      //リストに全ID取得する
      let getAllId = userDoc.docs.map((doc) => {
        return doc.id;
      });
      console.log(getAllId);

      //IDでデータを取得する
      let getById = [];
      for (let i = 0; i < getAllId.length; i++) {
        const getDataById = await userRef.doc(getAllId[i]).get();
        if (getDataById.exists) {
          getById.push(getDataById.data());
        }
      }
      console.log(getById);
    },
  },
};
</script>


<style scoped>

</style>
