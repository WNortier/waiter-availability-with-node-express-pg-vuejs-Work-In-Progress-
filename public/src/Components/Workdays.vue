<template>
  <div class="row">
    <div class="col-md-12">
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
            <div class="form-group">
              <label for="sel1">Select Waiter:</label>
              <select class="form-control" id="sel1"  @change="onChange($event.target.value)">
                <option
                  v-for="(waiter, index) in waiters"
                  :selected="waiter == 'Warwick'"
                  :key="waiterId = index"
                  :value="waiters.id"
                >{{ waiters.name }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <button class="btn btn-secondary" @click="sendWorkdays">Submit Workdays</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      waiterId: "",
      workday: [],
      waiters: [{name:"Warwick", id: 1}, {name:"Timothy", id: 2}, {name:"Pedro", id: 3}, {name: "Anita", id:4}],
      selectedWaiter: "Warwick"
    };
  },
  methods: {
    sendWorkdays() {
      // axios.get("http://localhost:4007/api/shiftsInfo").then(results => {
      //   let response = results.data;
      //   let data = response.data;
      //   console.log(data);
      // });

      axios.post("http://localhost:4007/api/waiterSubmission", {
        workday: this.workday,
        waiterId: this.waiterId
      });
    }
  },
  computed: {
    onChange(key)
    {
      this.waiterId = key
    }
  }
};
</script>
