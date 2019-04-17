<template>
  <v-container fluid>
    <v-card>
      <v-container wrap>
        <v-layout wrap justify-center align-center>
          <v-layout wrap justify-center align-center>
            <v-flex mr-2 md5>
              <v-text-field v-model="name" label="Name"></v-text-field>
            </v-flex>
            <v-flex mr-2 md5>
              <!-- Phone Number gets transfered here from the Phone page input-->

              <v-text-field v-model="phoneNumber" label="Phone Number"></v-text-field>
            </v-flex>

            <!--  -->

            <!--  -->
            <!--  -->

            <v-flex mr-2 md2>
              <v-select v-model="locationType" :items="locationTypes" label="Location Type"></v-select>
            </v-flex>

            <v-flex mr-2 md4>
              <v-text-field clearable v-model="address" label="Address"></v-text-field>
            </v-flex>

            <v-flex mr-2 md2>
              <v-text-field v-model="aptBizNumber" label="Apt/Biz #"></v-text-field>
            </v-flex>
            <v-flex mr-2 md2>
              <v-text-field v-model="aptBizName" label="Apt/Biz Name"></v-text-field>
            </v-flex>

            <v-flex mr-2 md5>
              <v-text-field v-model="customerNotes" label="Customer Notes"></v-text-field>
            </v-flex>
            <v-flex mr-2 md5>
              <v-text-field v-model="internalNotes" label="Internal Notes"></v-text-field>
            </v-flex>

            <v-flex mr-2 md2>
              <v-text-field v-model="date" class="centered-input" label="First Order Date"></v-text-field>
            </v-flex>

            <v-flex mr-2 md2>
              <v-text-field
                v-model="numberOfOrders"
                class="centered-input"
                label="Number of Orders"
              ></v-text-field>
            </v-flex>

            <v-flex mr-2 md2>
              <v-text-field
                v-model="dollarsSpent"
                class="centered-input"
                label="Total Dollars Spent"
                prefix="$"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout pa-4 text-xs-center>
            <v-flex mt-2>
              <v-btn to="/phone">
                Cancel
                <v-icon right>cancel</v-icon>
              </v-btn>
            </v-flex>

            <v-flex>
              <!-- Edit Customer button opens up dialog popup with the ability to edit customer information, all connected to db -->
              <v-btn large @click="editCustomer">
                Edit Customer
                <v-icon right>edit</v-icon>
              </v-btn>
            </v-flex>
            <v-spacer></v-spacer>
            <v-divider vertical></v-divider>
            <v-spacer></v-spacer>
            <v-flex>
              <!-- Button -->
              <v-btn large>
                Pickup
                <!-- Icon goes to 'views/InshopMenu/orderID/customerID' -->
                <v-icon right large @click="startOrderID">transfer_within_a_station</v-icon>
              </v-btn>

              <v-btn large>
                Delivery
                <!-- Icon goes to 'views/DeliveryMenu/orderID/customerID' -->
                <v-icon right large @click="startOrderID">drive_eta</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
// import Navdrawer2 from "@/components/Navdrawer/Navdrawer2";
import { db } from "@/fb";

export default {
  data() {
    return {
      valid: false,
      phoneNumber: "",
      name: "",
      address: "",
      aptBizNumber: "",
      aptBizName: "",
      customerNotes: "",
      internalNotes: "",
      locationTypes: ["Home", "Apartment", "Business"],
      locationType: ""
    };
  },
  // components: { Navdrawer2 },
  methods: {
    addDeliveryCustomer() {
      this.$router.push("/deliverymenu");
      const newCustomer = {
        phoneNumber: this.phoneNumber,
        name: this.name,
        locationType: this.locationType,
        address: this.address,
        aptBizNumber: this.aptBizNumber,
        aptBizName: this.aptBizName,
        customerNotes: this.customerNotes,
        internalNotes: this.internalNotes
      };
      console.log(newCustomer);
      db.collection("order")
        .add(newCustomer)
        .then(() => {
          this.dialog = false;
        });
    },
    addPickupCustomer() {
      this.$router.push("/pickupmenu");
      const newCustomer = {
        phoneNumber: this.phoneNumber,
        name: this.name
      };
      console.log(newCustomer);
      db.collection("order")
        .add(newCustomer)
        .then(() => {
          this.dialog = false;
        });
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
.centered-input input {
  text-align: center;
}
.display-3 {
  text-decoration: underline;
}
</style>
