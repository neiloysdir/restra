<template>
    <img class="logo" src="@/assets/logo.png" alt="logo" />
    <h1 :style="{ color: '#151546' }">Login</h1>
    <div class="register">
        <input type="email" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="Login">Sign Up</button>
        <p :style="{display: inline}">Don't Have an Account? <router-link class="link" :to="{ name: 'SignUp' }">Sign Up</router-link></p>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            email: "",
            password: ""
        }
    }
}
</script>