<template>
  <img class="logo" src="@/assets/logo.png" alt="logo" />
  <h1 :style="{ color: '#151546' }">Login</h1>
  <div class="register">
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="Login">Login</button>
    <p>
      Don't Have an Account?
      <router-link class="link" :to="{ name: 'SignUp' }">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'LoginPage',
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async Login() {
      console.log("login called");
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      console.log(result);
      if (result.status == 200 && result.data.length >= 1) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
      } else {
        alert("user not found");
      }
      this.email = "";
      this.password = "";
    },
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if(user) {
      this.$router.push({name: 'HomePage'})
    }
  }
};
</script>

<style scoped>
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
