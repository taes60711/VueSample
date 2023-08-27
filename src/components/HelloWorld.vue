<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="addData()">firebase_Create</button>
    <br />
    <button @click="getData()">firebase_Read</button>
    <br />
    <button @click="updateData()">firebase_Update</button>
    <br />
    <button @click="deleteData()">firebase_Delete</button>
    <br />

    <button @click="click()">Class</button>
  </div>
</template>

<script>
import { crudService } from "/src/Service/crudService.js";
import { users } from "/src/Components/HelloWorldClass.js";

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

      userClass.setUser({
        Id: "classedId",
        born: "classedborn",
      });
      console.log(userClass.getUser());
      userClass.setUser({
        Id: "classedId",
        born: "classedborn",
        first: "classedfirst",
        last: "classedlast",
      });
      console.log(userClass.getUser());
    },

    //crudService.js  setData()
    addData: async function () {
      const crud = new crudService();
      await crud
        .setData()
        .then(() => console.log("add Sucessfull"))
        .catch((e) => console.error(e));
    },

    //crudService.js  getData()
    getData: async function () {
      const crud = new crudService();
      await crud.getData().catch((e) => console.error(e));
    },

    //crudService.js  updateData()
    updateData: async function () {
      const crud = new crudService();
      await crud
        .updateData()
        .then(() => console.log("update Sucessfull"))
        .catch((e) => console.error(e));
    },

    //crudService.js  deleteData()
    deleteData: async function () {
      const crud = new crudService();
      await crud
        .deleteData()
        .then(() => console.log("delete Sucessfull"))
        .catch((e) => console.error(e));
    },
  },
};
</script>

<style scoped>
</style>
