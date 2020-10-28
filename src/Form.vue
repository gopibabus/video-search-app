<template>
  <div class="container mt-5">
    <h1 class="mb-5">Sign in Form</h1>
    <form id="login-form" @submit.prevent="processForm">
      <div class="alert alert-danger" role="alert" v-if="errors.email">
        Please enter email properly!!
      </div>
      <div class="alert alert-danger" role="alert" v-if="errors.password">
        Please enter password properly!!
      </div>
      <EmailField @validateEmail="emailError"></EmailField>
      <PasswordFeild @validatePassword="passwordError"></PasswordFeild>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import EmailField from "./components/form/EmailField";
import PasswordFeild from "./components/form/PasswordField";

export default {
  name: "Form",
  components: {
    EmailField,
    PasswordFeild,
  },
  data() {
    return {
      password: "",
      data() {
        return {
          email: "",
          password: "",
        };
      },
      errors: {
        password: false,
        email: false,
      },
    };
  },
  methods: {
    emailError(email) {
      this.email = email.value;
      this.errors.email = email.error;
    },
    passwordError(password) {
      this.password = password.value;
      this.errors.password = password.error;
    },
    processForm() {
      if (!Object.values(this.errors).includes(true)) {
        console.log({ email: this.email, password: this.password });
        alert("Processing!");
      } else {
         alert("Resolve the errors and Fill the form!!!");
      }
    }
  },
};
</script>

<style scoped>
</style>
