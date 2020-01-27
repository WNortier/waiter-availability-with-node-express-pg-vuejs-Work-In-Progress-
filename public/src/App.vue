<template>
  <div class="container">
    <h1>{{msg}}</h1>
    <br />
    <br />
<app-workdays></app-workdays>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <hr />
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
      </div>
    </div>
    <br />
    <hr />
    <ul>
      <li class="list-group-item" v-for="wu in waitersAndIds">{{ wu.id}} - {{ wu.name }}</li>
    </ul>
  </div>
</template>

<script>
import Workdays from "./Components/Workdays.vue";

export default {
  data() {
    return {
      msg: "Waiter Availability",
      waitersAndIds: []
    };
  },
  methods: {
    fetchData() {
      return null;
    }
  },
  created() {
    axios
      .get("http://localhost:4007/api/waiters")
      .then(results => {
        let response = results.data;
        let data = response.data;
        console.log(data);
        const resultArray = [];
        for (let key in data) {
          resultArray.push(data[key]);
        }
        this.waitersAndIds = resultArray;
      })
      .catch(function(err) {
        alert(err);
      });
  },
  components: {
    'app-workdays': Workdays
  }
};
</script>

// <style lang="scss">
// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

// h1,
// h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// a {
//   color: #42b983;
// }
// </style>
