<template>
  <div class="nav">
    <a href="#">Home</a>
    <a href="#">Resturant</a>
    <a href="#">Edit Resturants</a>
    <a @click="Logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  methods: {
    Logout() {
        localStorage.clear()
        this.$router.push({name: 'LoginPage' })
    }
  }
};
</script>

<style>
.nav a {
  text-decoration: none;
  font-weight: bolder;
  color: #151546;
  padding: 15px;
}

.nav a:hover {
  text-decoration: none;
  font-weight: bolder;
  color: #1f7b7e;
  padding: 15px;
}
</style>
