<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="750">
      <template v-slot:activator="{ on }">
        <v-btn large dark v-on="on">
          Remake Last Order
          <v-icon large right>replay</v-icon>
        </v-btn>
      </template>

      <v-card>
        <!--  -->
        <!-- Insert 'lastOrder' here (based on customerID) -->
        <!--  -->
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="white" flat @click="dialog = false">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="info" flat @click="dialog = false">Start New Order</v-btn>
          <v-divider vertical></v-divider>
          <!-- Button needs to open a new order including new orderID, and customerID attached with previous order already pre-populated) -->
          <v-btn color="info" flat @click="dialog = false">Remake Order</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>