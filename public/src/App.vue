<template>
  <div>
    
    <app-header></app-header>
    
    <div class="container">
      <div class="row">
        <div class="col-m-6 mx-auto">
          <button class="btn btn-secondary btn-small">Waiters</button>
        </div>
        <div class="col-m-6 mx-auto">
           <button class="btn btn-secondary btn-small">Manager</button>
        </div>
      </div>

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
