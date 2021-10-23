<template>
  <div id="app">
    <div id="nav">
        <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
<!--     
    <router-view/> -->
    

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        authenticated: false,
            mockAccount: {
              email: "laymui@hotmail.com",
              password: "12345678"
            }
      }
    },
     mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
  }
</script>

<style lang="scss">
/* GLOBAL SCSS IMPORT */
@import "./scss/main.scss";

</style>
