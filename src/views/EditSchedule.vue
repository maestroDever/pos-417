<template>
  <v-container>
    <v-flex text-xs-center mb-4>
      <h1 class="display-3">Edit Schedule</h1>
    </v-flex>
    <v-card>
      <v-container>
        <v-flex text-xs-center>
          <!--  -->
          <h3>// Edit Schedule //</h3>
          <!--  -->
        </v-flex>
      </v-container>
    </v-card>

    <AdminNavdrawer/>
  </v-container>
</template>

<script>
import AdminNavdrawer from "@/components/Navdrawer/AdminNavdrawer";

export default {
  drawer: true,
  components: { AdminNavdrawer }
};
</script>


<style >
a {
  text-decoration: none;
}

h1 {
  text-decoration: underline;
}
</style>
