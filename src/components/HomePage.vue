<template>
    <h1>Hello</h1>
</template>

<script>
export default {
    name: 'HomePage',
    mounted() {
    let user = localStorage.getItem('user-info')
    if(!user) {
      this.$router.push({name: 'LoginPage'})
    }
  }
}
</script>