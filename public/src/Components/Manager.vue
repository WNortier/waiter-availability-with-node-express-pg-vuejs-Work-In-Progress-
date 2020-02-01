<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center">This is the manager view</h1>
        <div
          class="card mr-5 d-inline-block"
          style="width: 6rem; height:6rem; backgroundColor:grey"
          :style="{'background-color':colorArray[0]}"
        >
          <div class="card-body" :style="{'background-color':colorArray[0]}"></div>
        </div>
        <div
          class="card mr-5 d-inline-block"
          style="width: 6rem; height:6rem; backgroundColor:grey"
          :style="{'background-color':colorArray[1]}"
        >
          <div class="card-body" :style="{'background-color':colorArray[1]}"></div>
        </div>
        <div
          class="card mr-5 d-inline-block"
          style="width: 6rem; height:6rem; backgroundColor:grey"
          :style="{'background-color':colorArray[2]}"
        >
          <div class="card-body" :style="{'background-color':colorArray[2]}"></div>
        </div>
        <div
          class="card mr-5 d-inline-block"
          style="width: 6rem; height:6rem; backgroundColor:grey"
          :style="{'background-color':colorArray[3]}"
        >
          <div class="card-body" :style="{'background-color':colorArray[3]}"></div>
        </div>
        <div
          class="card mr-5 d-inline-block"
          style="width: 6rem; height:6rem; backgroundColor:grey"
          :style="{'background-color':colorArray[4]}"
        >
          <div class="card-body" :style="{'background-color':colorArray[4]}"></div>
        </div>
        <div
          class="card mr-5 d-inline-block"
          style="width: 6rem; height:6rem; backgroundColor:grey"
          :style="{'background-color':colorArray[5]}"
        >
          <div class="card-body" :style="{'background-color':colorArray[5]}"></div>
        </div>
        <div
          class="card mr-5 d-inline-block"
          style="width: 6rem; height:6rem; backgroundColor:grey"
          :style="{'background-color':colorArray[6]}"
        >
          <div class="card-body" :style="{'background-color':colorArray[6]}"></div>
        </div>
      </div>
      <div class="col-md-12">
        <button class="btn btn-secondary small" @click="navigateToHome">Home</button>
      </div>
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