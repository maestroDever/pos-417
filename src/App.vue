<template>
  <v-app dark>
    <!-- <Navdrawer/> -->
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navdrawer from "@/components/Navdrawer/Navdrawer";

export default {
  name: "App",
  components: { Navdrawer },
  created() {
    console.log(this.$store.state.db);
  }
};
</script>


<style>
/* Remove verticle scrollbar */
::-webkit-scrollbar {
  display: none;
}
</style>
