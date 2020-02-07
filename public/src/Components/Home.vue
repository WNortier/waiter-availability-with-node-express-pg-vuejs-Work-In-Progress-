<template>
  <!-- <div class="row">
    <div class="col-m-6 mx-auto">
      <button @click="navigateToWaiters" class="btn btn-secondary btn-small">Waiters</button>
    </div>
    <div class="col-m-6 mx-auto">
      <button @click="navigateToManager" class="btn btn-secondary btn-small">Manager</button>
    </div>
  </div>-->
  <!-- <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark mb-3">
      <div class="container">
        <router-link class="navbar-brand" to="/">Waiter Availability</router-link>
      </div>
  </nav>-->

  <!-- <header id="home-section">

    <div class="dark-overlay"> -->

      <div class="home-inner container">
        <div class="row">
          <div class="col-lg-8 d-lg-block">
            <!-- d-none  -->
            <h1 class="display-4">
              <strong>Waiter Availability Portal</strong>
            </h1>
            <div class="d-flex">
              <div class="p-4 align-self-start">
                <i class="fas fa-check fa-2x"></i>
              </div>
              <div
                class="p-4 align-self-end"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, voluptatum!</div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card bg-primary text-center card-form">
              <div class="card-body">
                <form>
                  <h3>Sign Up Today</h3>
                <p>Please fill out this form to register</p>
                
                  <div class="form-group">
                    <input type="text" class="form-control form-control-lg my-2" placeholder="username" />
                    <input type="text" class="form-control form-control-lg my-2" placeholder="username" />
                    <input type="text" class="form-control form-control-lg my-2" placeholder="username" />
                  </div>
                  <input type="submit" value="Submit" class="btn btn-outline-light btn-block" />
                  <button @click="navigateToWaiters" class="btn btn-outline-light btn-block">Waiters</button>
                  <button @click="navigateToManager" class="btn btn-outline-light btn-block">Manager</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- </div>

  </header> -->


</template>

<script>
import Header from "./Header";

export default {
  methods: {
    navigateToWaiters() {
      this.$router.push("/waiters");
    },
    navigateToManager() {
      this.$router.push("/manager");
    }
  },
  components: {
    "app-header": Header
  }
};


</script>

<style scoped>

</style>