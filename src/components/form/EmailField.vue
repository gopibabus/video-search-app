<template>
  <div class="form-group">
    <label for="emailInput">Email address</label>
    <input
      type="email"
      :class="customClass"
      class="form-control"
      :name="customName"
      id="emailInput"
      placeholder="Enter email"
      v-model="email"
      @blur="validateEmail"
    />
  </div>
</template>

<script>
export default {
  name: "EmailField",
  props : ['customClass', 'customName'],
  data() {
    return {
      email: "",
      emailReg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    validateEmail() {
      let emailError = !this.emailReg.test(this.email.toLowerCase());
      this.$emit("validateEmail", {
        value: this.email,
        error: emailError
      });
    },
  },
};
</script>

<style scoped>
</style>
