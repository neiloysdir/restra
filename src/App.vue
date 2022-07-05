<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
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
.logo {
  width: 50px;
}
.register input {
  display: block;
  padding: 20px;
  margin-bottom: 20px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.register button {
  width: 345px;
  height: 60px;
  border: none;
  color: white;
  background-color: #151546;
  font-size: 15px;
  font-weight: bolder;
}
.link {
  text-decoration: none;
  font-weight: bolder;
  color: #151546;
}
</style>
