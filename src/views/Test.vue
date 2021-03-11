<template>
  <div class="container">
    <div id="app">
      <p>{{ currentDateTime() }}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  methods: {
    currentDateTime() {
      return moment().format("MMMM Do YYYY, h:mm:ss a");
    }
  }
};
</script>
