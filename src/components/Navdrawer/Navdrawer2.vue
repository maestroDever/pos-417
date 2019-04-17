<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app dark :width="375">
      <v-toolbar>
        <v-list class="pa-0">
          <v-list-tile avatar>
            <!-- <router-link to="/mainmenu"> -->
            <v-list-tile-avatar>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/deploy-7003e.appspot.com/o/silver-mine-subs-beltline-733_1413916173403.png?alt=media&token=1cc3549b-3012-41e0-8af0-8a13b0842684"
              >
            </v-list-tile-avatar>
            <!-- </router-link> -->
            <v-spacer></v-spacer>
            <v-list-tile-content>
              <!-- <router-link class="mainmenu" to="mainmenu"> -->
              <v-list-tile-title>Silvermine Subs</v-list-tile-title>
              <!-- </router-link> -->
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-flex mt-2 text-xs-center>
        <h1 class="underline">Last Order</h1>
      </v-flex>
      <!-- Table -->
      <!-- Should show 'Previous Order' -->
      <BuildingOrder/>
      <!--  -->
      <v-flex mt-3>
        <Subtotal/>
      </v-flex>
      <v-flex mt-2>
        <Tax/>
      </v-flex>
      <v-flex mt-2>
        <DeliveryFee/>
      </v-flex>
      <v-flex mt-2>
        <Total/>
      </v-flex>
      <v-flex mt-3>
        <v-divider></v-divider>
        <v-flex mt-3 text-xs-center>
          <LastOrder/>
        </v-flex>
        <td class="justify-center layout px-0">
          <!-- Arrow forward button goes to 'views/Menu:orderID' where the menu is prefilled with the previous order from the db. A new order and orderID is created in the db under the customer.  -->
        </td>
      </v-flex>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>POS</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </nav>
</template>

<script>
import BuildingOrder from "@/components/Tables/BuildingOrder";
import Subtotal from "@/components/Cards/OrderPricing/Subtotal";
import Tax from "@/components/Cards/OrderPricing/Tax";
import Total from "@/components/Cards/OrderPricing/Total";
import FinishOrder from "@/components/Cards/FinishOrder";
import Payment from "@/components/Popups/Payment";
import DeliveryFee from "@/components/Cards/OrderPricing/DeliveryFee";
import LastOrder from "@/components/LastOrder";

export default {
  components: {
    BuildingOrder,
    Subtotal,
    Tax,
    FinishOrder,
    Payment,
    Total,
    DeliveryFee,
    LastOrder
  },
  props: {
    permanent: Boolean
  },
  data: function() {
    return {
      drawer: true
    };
  }
};
</script>

<style>
a {
  text-decoration: none;
}
.underline {
  text-decoration: underline;
}
</style>
