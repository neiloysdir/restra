<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/AddRest">Add Resturant</router-link>
    <router-link to="/EditRest">Edit Resturants</router-link>
    <a @click="Logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  methods: {
    Logout() {
      localStorage.clear()
      this.$router.go({name: 'LoginPage' })
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
