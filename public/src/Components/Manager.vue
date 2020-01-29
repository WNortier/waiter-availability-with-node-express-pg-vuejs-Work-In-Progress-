<template>
  <div class="row">
    <div class="col-md-12">
      <h1 class="text-center">This is the manager view</h1>
      <div class="card mr-5 d-inline-block" style="width: 10rem; height:10rem; backgroundColor:grey" :style="{'background-color':colorArray[0]}">
        <div class="card-body" :style="{'background-color':colorArray[0]}">
        <!-- <p class="card-text"></p> -->
        </div>
      </div>
      <div class="card mr-5 d-inline-block" style="width: 10rem; height:10rem;">
        <div class="card-body" :style="{'background-color':colorArray[1]}"></div>
      </div>
    </div>
    <div class="col-md-12">
      <button class="btn btn-secondary small" @click="navigateToHome">Home</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorArray: [],
      test: "grey"
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  },
  created() {
    axios
      .get("http://localhost:4007/api/managerInfoReturner")
      .then(results => {
        let response = results.data;
        let data = response.data;
        const resultArray = [];
        for (let key in data) {
          resultArray.push(data[key]);
        }
        this.colorArray = resultArray;
        console.log(this.colorArray);
      })
      .catch(function(err) {
        alert(err);
      });
  }
};
</script>

<style scoped>
.bgGrey {
  background-color: grey;
}
</style>