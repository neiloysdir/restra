<template>
  <HeaderComp />
  <h1>Hello {{ name }}, HomePage</h1>
</template>

<script>
import HeaderComp from "./Header.vue";
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
    };
  },
  components: {
    HeaderComp,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
      if (!user) {
        console.log("user not found");
        this.$router.push({ path: "/Login" });
      } else {
        console.log("user not found");
      }
      this.name = JSON.parse(user)[0].name;
  },
};
</script>
