<template>
  <button type="submit" @click="loginToSunflowerField" data-qa="submit" class="a-submitButton">
    <slot></slot>
  </button>
</template>

<script>
// @ is an alias to /src


export default {
  data() {
      return {
       
      }
  },

  methods: {
    loginToSunflowerField() {
       
      alert('Login activated')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/scss/components/buttons/_submitButton.scss";

</style>
