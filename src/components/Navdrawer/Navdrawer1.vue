<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>POS</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app dark :width="375">
      <v-toolbar>
        <v-list class="pa-0">
          <v-list-tile avatar>
            <router-link to="/mainmenu">
              <v-list-tile-avatar>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/deploy-7003e.appspot.com/o/silver-mine-subs-beltline-733_1413916173403.png?alt=media&token=1cc3549b-3012-41e0-8af0-8a13b0842684"
                >
              </v-list-tile-avatar>
            </router-link>
            <v-spacer></v-spacer>
            <v-list-tile-content>
              <router-link class="mainmenu" to="customerprofile">
                <v-list-tile-title>Customer Profile</v-list-tile-title>
              </router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <!-- Table -->
      <BuildingOrder/>
      <!--  -->
      <v-flex mt-3>
        <Subtotal/>
      </v-flex>
      <v-flex mt-2>
        <Tax/>
      </v-flex>
      <v-flex mt-2>
        <Total/>
      </v-flex>
      <v-flex mt-2>
        <Payment/>
      </v-flex>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import BuildingOrder from "@/components/Tables/BuildingOrder";
import Subtotal from "@/components/Cards/OrderPricing/Subtotal";
import Tax from "@/components/Cards/OrderPricing/Tax";
import Total from "@/components/Cards/OrderPricing/Total";
import FinishOrder from "@/components/Cards/FinishOrder";
import Payment from "@/components/Popups/Payment";

export default {
  components: { BuildingOrder, Subtotal, Tax, FinishOrder, Payment, Total },
  props: {
    permanent: Boolean
  },
  data: function() {
    return {
      drawer: true,
      sheet: false,
      tiles: [
        { img: "keep.png", title: "Keep" },
        { img: "inbox.png", title: "Inbox" },
        { img: "hangouts.png", title: "Hangouts" },
        { img: "messenger.png", title: "Messenger" },
        { img: "google.png", title: "Google+" }
      ]
    };
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
