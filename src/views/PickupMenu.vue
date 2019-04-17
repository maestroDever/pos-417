<template>
  <v-card>
    <v-flex pa-5 text-xs-center>
      <h1>Pickup Menu</h1>
      <h2>Order ID: {{ orderID }}</h2>
      <h2>Customer ID: {{ customerID }}</h2>
    </v-flex>
    <v-container fill-height grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <!-- <v-btn round block color="primary" large dark to="/tombstone">Tombstone</v-btn> -->
        <v-flex>
          <GeorgetownModifierMenu/>
        </v-flex>
      </v-layout>

      <Navdrawer1/>
    </v-container>
  </v-card>
</template>

<script>
import Navdrawer1 from "@/components/Navdrawer/Navdrawer1";
import TombstoneModifierMenu from "@/components/Popups/TombstoneModifierMenu";
import GeorgetownModifierMenu from "@/components/Popups/GeorgetownModifierMenu";

export default {
  props: ["orderID", "customerID"],
  data() {
    return {
      duration: "Tombstone",
      smoked: "$4.99",
      // date: new Date().toISOString().substr(0, 10),d
      date: "1",
      dialog: false,
      modal: false,
      menu: false
    };
  },
  components: { Navdrawer1, TombstoneModifierMenu, GeorgetownModifierMenu }
};
</script>
