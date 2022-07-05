<template>
  <img class="logo" src="@/assets/logo.png" alt="logo" />
  <h1 :style="{ color: '#151546' }">Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="signUp">Sign Up</button>
    <p :style="{display: inline}">Have an Account? <router-link class="link" :to="{ name: 'LoginPage' }">Login</router-link></p>
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
        this.$router.push({name: 'HomePage'})
      }
      this.name = "";
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
