<template>
    <HeaderComp/>
    <h1>Add Resturants</h1>
</template>

<script>
import HeaderComp from './Header.vue'
export default {
    name: 'AddRest',
    components: {
        HeaderComp
    },
    mounted() {
    let user = localStorage.getItem('user-info')
    if(!user) {
      this.$router.push({name: 'LoginPage'})
    }
  }
}
</script>