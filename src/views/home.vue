<template>
  <z-view label="Faircorp EMSE App" label-pos="bottom">
    <!-- add time here. -->
    <small>
      {{ date().toDateString() }}
    </small>
    <br />
    <br />
    <br />
    <p>Kushagra's Faircorp App!</p>
    <div slot="extension">
      <z-spot
        style="
          background-color: white;
          border-width: 1px;
          border-color: var(--background-color);
        "
        :angle="-125"
        size="m"
        :distance="120"
        to-view="status"
      >
        <i style="color: var(--accent-text-color)" class="fas fa-bell"></i
        ><br />
        <span style="color: var(--accent-text-color)">15</span>
      </z-spot>

      <z-spot
        :angle="-80"
        size="m"
        :distance="120"
        label="Location"
        label-pos="top"
        to-view="locations"
      >
        <i class="fas fa-globe"></i>
      </z-spot>

      <!-- heater -->
      <z-spot
        :angle="-30"
        size="m"
        :distance="120"
        label="Heater"
        label-pos="top"
        to-view="heaters"
      >
        <i class="fas fa-fire"></i>
      </z-spot>
            <z-spot
        :angle="-40"
        size="m"
        :distance="120"
        label="HeaterTable"
        label-pos="top"
        to-view="heatertable"
      >
        <i class="fas fa-fire"></i>
      </z-spot>

      <!-- room -->
      <z-spot
        :angle="20"
        size="m"
        :distance="120"
        label="Room"
        label-pos="right"
        to-view="rooms"
      >
        <i class="fas fa-bed"></i>
      </z-spot>
      <!-- window -->
      <z-spot
        :angle="60"
        size="m"
        :distance="120"
        label="Window"
        label-pos="right"
        to-view="windows"
      >
        <i class="fas fa-window-maximize"></i>
      </z-spot>

      <!-- building -->
      <z-spot
        :angle="140"
        size="m"
        :distance="120"
        label="Building"
        label-pos="left"
        to-view="buildings"
      >
        <i class="fas fa-building"></i>
      </z-spot>
      <!-- basic hello -->
      <z-spot
        :angle="180"
        :distance="120"
        size="m"
        label="Hello"
        to-view="hello"
      >
        <i class="far fa-smile-beam"></i>
      </z-spot>
    </div>
  </z-view>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      data: "Today",
      weather: null,
    };
  },
  methods: {
    date: () => {
      let date = new Date();
      return date;
    },

    format_date: (value) => {
      if (value) {
        return moment(String(value).format("YYYYMMDD"));
      }
    },
  },
};
</script>
