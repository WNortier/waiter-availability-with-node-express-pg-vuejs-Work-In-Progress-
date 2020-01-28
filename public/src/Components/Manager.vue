<template>
  <div class="col-md-12 justify">
    <h1>This is the manager view</h1>
    <button class="btn btn-secondary small" @click="navigateToHome">Home></button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>