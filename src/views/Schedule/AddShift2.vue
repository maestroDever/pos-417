<template>
  <v-container>
    <v-flex text-xs-center mb-4>
      <h1 class="title">Add Shift2</h1>
    </v-flex>

    <Navdrawer/>
  </v-container>
</template>

<script>
import Navdrawer from "@/components/Navdrawer/Navdrawer";

export default {
  drawer: false,
  components: { Navdrawer }
};
</script>


<style >
a {
  text-decoration: none;
}
.title {
  text-decoration: underline;
}
</style>