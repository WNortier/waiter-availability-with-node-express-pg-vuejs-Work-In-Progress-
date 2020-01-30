<template>
  <div>
    <app-header></app-header>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>

  <!-- <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"> -->
</template>

<script>
import Header from "./Components/Header.vue";
export default {
  components: {
    "app-header": Header
  }
};
</script>
