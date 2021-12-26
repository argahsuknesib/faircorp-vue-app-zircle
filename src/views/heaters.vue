<template>
  <z-view label="Heaters" label-pos="bottom">
    <br />
    <br />
    <br />
    <i class="fas fa-fire"></i>


<z-spot
:angle="-30"
size="m"
:distance="73"
label=""
label-pos="top"
></z-spot>

  </z-view>
</template>

<script>
import axios from "axios";

export default {
  name: "heaters",

  data() {
    return {
      searchQuery: "",
      heaters: null,
      columns  : ["id", "name", "power", "status", "Room"]
    };
  },

  mounted() {
    axios
      .get(
        "https://app-29838324-aff3-48c1-97cd-42b28e639455.cleverapps.io/api/heater"
      )
      .then((response) => (this.heaters = response.data));
  },
};
</script>
