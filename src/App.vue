<template>
  <div id="app">
    <div class="m-flexContainer">
      <div class="a-heroImage"></div>

      <div class="m-formContainer">
        <LoginForm :title="headerText" />
      </div>
    </div>
   
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "app",
  data() {
    return {
      headerText: "Welcome to Sunflower field"
    };
  },
  components: {
    LoginForm
  }
};
</script>

<style lang="scss">
/* GLOBAL SCSS IMPORT */
@import "./scss/main.scss";

</style>
