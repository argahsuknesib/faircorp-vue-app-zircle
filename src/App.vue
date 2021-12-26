<template>
  <z-canvas :views='$options.components'></z-canvas>
</template>
<script>
export default {
/* eslint-disable vue/no-unused-components */
  components: {
    home : () => import('./views/home.vue'),
    locations : () => import('./views/locations.vue'),
    heaters : () => import('./views/heaters.vue'),
    buildings : () => import('./views/buildings.vue'),
    hello : () => import('./views/hello.vue'),
    rooms : () => import('./views/rooms.vue'),
    windows : () => import('./views/windows.vue'),
    heatertable : () => import('./views/heatertable.vue')

  },
  mounted () {
    this.$zircle.setView('home')
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
@import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');
</style>
