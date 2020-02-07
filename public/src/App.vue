<template>
    <header id="home-section">

    <div class="dark-overlay">
                  <app-header></app-header>
    <!-- <app-header></app-header>  -->
    <router-view></router-view>
    <!-- <div class="container"></div> -->

       </div>
    </header>
</template>

<script>
import Header from "./Components/Header.vue";
export default {
  components: {
    "app-header": Header
  }
};
</script>
