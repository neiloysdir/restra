<template>
    <HeaderComp/>
</template>

<script>
import HeaderComp from './Header.vue'
export default {
    name: 'HomePage',
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