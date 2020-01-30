<template>
  <div class="row">
    <div class="col-m-6 mx-auto">
      <button @click="navigateToWaiters" class="btn btn-secondary btn-small">Waiters</button>
    </div>
    <div class="col-m-6 mx-auto">
      <button @click="navigateToManager" class="btn btn-secondary btn-small">Manager</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToWaiters() {
      this.$router.push("/waiters");
    },
    navigateToManager() {
      this.$router.push("/manager");
    }
  }
};
</script>