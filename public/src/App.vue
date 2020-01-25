<template>
  <div class="container">
    <h1>{{msg}}</h1>
    <br />
    <br />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="form-group">
          <label for="monday">
            <input type="checkbox" id="monday" value="1" v-model="workday" />Monday
          </label>
          <label for="tuesday">
            <input type="checkbox" id="tuesday" value="2" v-model="workday" /> Tuesday
          </label>
          <label for="wednesday">
            <input type="checkbox" id="wednesday" value="3" v-model="workday" /> Wednesday
          </label>
          <label for="thursday">
            <input type="checkbox" id="thursday" value="4" v-model="workday" /> Thursday
          </label>
          <label for="friday">
            <input type="checkbox" id="friday" value="5" v-model="workday" /> Friday
          </label>
          <label for="saturday">
            <input type="checkbox" id="saturday" value="6" v-model="workday" /> Saturday
          </label>
          <label for="sunday">
            <input type="checkbox" id="sunday" value="7" v-model="workday" /> Sunday
          </label>
          <br />
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
              <label for="waiter">Waiter</label>
              <select id="waiter" class="form-control" v-model="waiterId">
                <option value="1">Warwick</option>
                <option value="2">Pedro</option>
                <option value="3">Timothy</option>
                <option value="4">Anita</option>
              </select>
            </div>
          </div>
        </div>
        <button class="btn btn-primary" @click="sendWorkdays">Submit Workdays</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <hr />
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
      </div>
    </div>
    <br />
    <hr />
    <!-- <ul>
      <li class="list-group-item" v-for="wu in waitersAndIds">{{ wu.id}} - {{ wu.name }}</li>
    </ul>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Waiter Availability",
      waitersAndIds: [],
      waiterId: "",
      workday: []
    };
  },
  methods: {
    fetchData() {
      return null;
    },
    sendWorkdays() {
      console.log(this.workday)
      console.log(this.waiterId)
       axios.post('http://localhost:4007/api/waiterSubmission', {workday:this.workday, waiterId:this.waiterId})
    }
  },
  // created() {
  //   axios
  //     .get("http://localhost:4007/api/waiters")
  //     .then(results => {
  //       let response = results.data;
  //       let data = response.data;
  //       console.log(data);
  //       const resultArray = [];
  //       for (let key in data) {
  //         resultArray.push(data[key]);
  //       }
  //       this.waitersAndIds = resultArray;
  //     })
  //     .catch(function(err) {
  //       alert(err);
  //     });
  // }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
