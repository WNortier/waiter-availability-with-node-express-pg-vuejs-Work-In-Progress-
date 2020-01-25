<template>
  <div class="container">
    <h1>{{msg}}</h1>
    <br />
    <br />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="form-group">
          <label for="monday">
            <input type="checkbox" id="monday" value="Monday" v-model="workdays" />Monday
          </label>
          <label for="tuesday">
            <input type="checkbox" id="tuesday" value="Tuesday" v-model="workdays" /> Tuesday
          </label>
          <label for="wednesday">
            <input type="checkbox" id="wednesday" value="Wednesday" v-model="workdays" /> Wednesday
          </label>
          <label for="thursday">
            <input type="checkbox" id="thursday" value="Thursday" v-model="workdays" /> Thursday
          </label>
          <label for="friday">
            <input type="checkbox" id="friday" value="Friday" v-model="workdays" /> Friday
          </label>
          <label for="saturday">
            <input type="checkbox" id="saturday" value="Saturday" v-model="workdays" /> Saturday
          </label>
          <label for="sunday">
            <input type="checkbox" id="sunday" value="Sunday" v-model="workdays" /> Sunday
          </label>
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
    <ul>
      <li class="list-group-item" v-for="wu in waitersAndIds">{{ wu.id}} - {{ wu.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Waiter Availability",
      waitersAndIds: []
    };
  },
  methods: {
    fetchData() {
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
    }
  }
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
