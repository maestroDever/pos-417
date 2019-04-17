<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-layout>
          <v-flex text-xs-center mb-3>
            <h1 class="display-3">Inshop Order</h1>
          </v-flex>
        </v-layout>

        <v-card>
          <v-container pa-5 mt-5>
            <v-layout pa-5>
              <!--  -->
              <!-- Buttons -->
              <v-layout class="justify-center align-center">
                <v-btn outline block round large color="info" @click="save">
                  New Order
                  <v-icon x-large right>cloud_upload</v-icon>
                </v-btn>
              </v-layout>
              <!--  -->
            </v-layout>
            <Navdrawer/>
          </v-container>
        </v-card>
        <v-flex text-xs-center mt-3>
          <h1 class="announcment">***Don't forget to offer a cookie or brownie!!!***</h1>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Navdrawer from "@/components/Navdrawer/Navdrawer";
import { db, buildingOrder } from "@/fb";

export default {
  components: {
    Navdrawer
  },

  created() {},

  methods: {
    save() {
      const time = Date.now();
      let newBuildingOrder = {
        orderID: "",
        orderType: "Inshop"
      };
      if (confirm("Are you sure to make a new order?")) {
        newBuildingOrder.orderID = String(time);
        buildingOrder
          .doc(newBuildingOrder.orderID)
          .set(newBuildingOrder)
          .then(docRef => {
            this.$router.push("/menu?order_id=" + newBuildingOrder.orderID);
          })
          .catch(error => {
            alert("Error occurs while adding a new buildingOrder");
            console.log(error);
          });
      }
    }
  }
};
</script>

<style>
.display-3 {
  text-decoration: underline;
  color: white;
}
.announcment {
  color: red;
  text-decoration: none;
}
</style>
