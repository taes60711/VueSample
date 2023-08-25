<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getData()">test</button>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcV_uQSFmZSRabSXUppAK4qHhZJ1v_vVg",
  authDomain: "vuesample-d1c56.firebaseapp.com",
  projectId: "vuesample-d1c56",
  storageBucket: "vuesample-d1c56.appspot.com",
  messagingSenderId: "44844191019",
  appId: "1:44844191019:web:825bf9d428f5d90613c96e",
  measurementId: "G-XVNJ9B517B",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); 

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    click(message) {
      alert(message);
    },
    getData: async function () {
      const userRef = db.collection("users");
      const userDoc = await userRef.doc("V0NxTrS3IMwD4GSwK6RB").get();
      if (userDoc.exists) {
        console.log(userDoc.id);
        console.log(userDoc.data());
        console.log(userDoc.get("title"));
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
