<template>
  <div class="heater">
    <table>
      <thead>
      <tr>
        <th v-for="key in gridColumns" v-bind:key="key">
          {{ key }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="entry in this.heaters" v-bind:key="entry.id">
        <td> {{ entry.id }}
        </td>
        <td> {{ entry.name }}
        </td>
        <td> {{ entry.power }}
        </td>
        <td v-on:click="this.switchStatus(entry)" class="clickable"> {{ entry.heaterStatus }}
        </td>
        <td> {{ entry.roomName }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import axios from "axios";

export default {

  name: "heaters",

  data() {
    return {
      searchQuery: "",
      heaters: null,
      gridColumns: ["id", "name", "power", "Status", "Room"]
    }
  },
  mounted() {
    axios
        .get("https://aurelien-jeanneau-faircorp.cleverapps.io/api/heater")
        .then(response => (this.heaters = response.data))
  },
  methods: {
    switchStatus: function (heater) {
      axios.put("https://aurelien-jeanneau-faircorp.cleverapps.io/api/heater/" + heater.id + "/switch");
      location.reload();
    }
  }
}
</script>


