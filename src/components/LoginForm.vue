<template>
  <form class="m-loginForm">
    <Header :title="title" />

    <div class="m-loginForm__group">
      <animated-input name="email" v-model="input.email" placeholder="Email or Name" animateBorder />
    </div>

    <div class="m-loginForm__group">
      <animated-input
       name="password"
       v-model="input.password"
        placeholder="Password"
        animateBorder
        inputType="password"
      />
    </div>

    <div class="m-loginForm__group -mg-lg">
      <div class="m-loginForm__rememberWrapper">
        <custom-checkbox
          name="remember_me"
          id="remember_me"
          labelText="Remember Me 😉"
          checkbox="✔︎"
        ></custom-checkbox>

        <link-button href="#" linkText="Forgot Password">
          forgot password 🌻
        </link-button>
      </div>
    </div>

    <submit-button v-on:click="login()">Login</submit-button>
  </form>
</template>

<script>
import Header from "./inputs/Header.vue";
import AnimatedInput from "./inputs/AnimatedInput.vue";
import CustomCheckbox from "./inputs/CustomCheckbox.vue";
import LinkButton from "./buttons/LinkButton.vue";
import SubmitButton from "./buttons/SubmitButton.vue";

export default {
  name: 'Login',
  data() {
    return {
      input: {
        email: "",
        password: "",
        rememberMe: false
      }
    }
  },
  methods: {
    login() {
        if(this.input.email != "" && this.input.password != "") {
          if(this.input.email == this.$parent.mockAccount.email && this.input.password == this.$parent.mockAccount.password) {
            this.$emit("authenticated", true);
            this.$router.replace({ name: "secure" });
        } else {
            console.log("The username and / or password is incorrect");
        }
    } else {
        console.log("A username and password must be present");
    }
      }
  },
 
  components: {
    Header,
    AnimatedInput,
    CustomCheckbox,
    LinkButton,
    SubmitButton
  },
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/forms/_loginForm.scss";

</style>
