<template>
  <div class="form-group">
    <label for="passwordInput">Password</label>
    <input
      type="password"
      :class="customClass"
      class="form-control"
      :name="customName"
      id="passwordInput"
      placeholder="Password"
      v-model="password"
       @blur="validatePassword"
    />
  </div>
</template>

<script>
export default {
  name: "PasswordField",
  props : ['customClass', 'customName'],
  data() {
    return {
      password: "",
    };
  },
  methods: {
    validatePassword() {
      let passwordError = !(this.password.length > 5);
      this.$emit("validatePassword", {
        value: this.password,
        error: passwordError
      });
    },
  },
};
</script>

<style scoped>
</style>
