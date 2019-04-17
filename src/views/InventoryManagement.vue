<template>
  <v-container>
    <v-layout>
      <v-flex></v-flex>
      <v-flex text-xs-center mb-3>
        <h1 class="display-3">Inventory Management</h1>
      </v-flex>

      <v-flex text-xs-right mt-4>
        <router-link to="/admin">
          <v-icon left large>home</v-icon>
          <h5>Admin Home</h5>
        </router-link>
      </v-flex>
    </v-layout>
    <v-card>
      <v-container>
        <v-flex text-xs-center>
          <!--  -->
          <h3>// Inventory Management //</h3>
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
