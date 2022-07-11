<template>
  <img class="logo" src="@/assets/logo.png" alt="logo" />
  <h1 :style="{ color: '#151546' }">Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="signUp">Sign Up</button>
    <p>Have an Account? <router-link class="link" :to="{ name: 'LoginPage' }">Login</router-link></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.log(result)
      if(result.status == 201) {
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name: 'LoginPage'})
      }
      this.name = "";
      this.email = "";
      this.password = "";
    },
  },
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
}</style>