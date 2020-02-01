<template>
  <div>
    <!-- <app-header></app-header>  -->
    <router-view></router-view>
    <!-- <div class="container"></div> -->

  </div>
</template>

<script>
import Header from "./Components/Header.vue";
export default {
  components: {
    "app-header": Header
  }
};
</script>
