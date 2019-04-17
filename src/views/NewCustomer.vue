<template>
  <v-container>
    <v-flex text="red" v-if="delivery" text-xs-center>
      <h1>New Delivery Customer</h1>
    </v-flex>
    <v-flex v-if="!delivery" text-xs-center>
      <h1>New Pickup Customer</h1>
    </v-flex>
    <v-card>
      <v-flex>
        <v-form v-model="valid">
          <v-container>
            <v-layout>
              <v-flex>
                <v-flex v-if="delivery">
                  <h3>Change to:</h3>
                </v-flex>
                <v-flex v-if="!delivery">
                  <h3>Change to:</h3>
                </v-flex>
                <v-btn large class="success" @click="delivery = true" v-if="!delivery">Delivery</v-btn>

                <v-btn large class="info" @click="delivery = false" v-if="delivery">Pickup</v-btn>
              </v-flex>
            </v-layout>

            <v-layout justify-center align-center>
              <v-flex xs12 md4 text-xs-center>
                <!-- Phone Number gets transfered here from the Phone page input-->
                <h4>Phone Number</h4>
                <v-text-field v-model="phoneNumber" class="centered-input"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout justify-center align-center>
              <v-flex pa-0 text-xs-center xs12 md4>
                <h4>Name</h4>
                <v-text-field v-model="name" class="centered-input"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout v-if="delivery" justify-center align-center>
              <v-flex pa-0 mt-4 md4>
                <v-select v-model="locationType" :items="locationTypes" label="Location Type"></v-select>
              </v-flex>
            </v-layout>

            <v-layout v-if="delivery" justify-center align-center>
              <v-flex xs12 md6>
                <h4>Address</h4>
                <v-text-field v-model="address"></v-text-field>
              </v-flex>
              <v-flex md2>
                <h4>Apt/Biz #</h4>
                <v-text-field v-model="aptBizNumber"></v-text-field>
              </v-flex>
              <v-flex xs12 md3>
                <h4>Apt/Biz Name</h4>
                <v-text-field v-model="aptBizName"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout v-if="delivery" justify-center align-center>
              <v-flex md6>
                <h4>Customer Notes</h4>
                <v-text-field v-model="customerNotes"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout v-if="delivery" justify-center align-center>
              <v-flex md6>
                <h4>Internal Notes</h4>
                <v-text-field v-model="internalNotes"></v-text-field>
              </v-flex>
            </v-layout>
            <!-- Delivery -->
            <v-layout v-if="delivery" justify-center align-center>
              <v-btn to="/phone">Cancel</v-btn>
              <v-btn @click="startOrder()">Start Order</v-btn>
            </v-layout>
            <!-- Pickup -->
            <v-layout v-if="!delivery" justify-center align-center>
              <v-btn to="/phone">Cancel</v-btn>
              <v-btn @click="addPickupCustomer">Start Order</v-btn>
            </v-layout>
          </v-container>
        </v-form>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>
import Navdrawer from "@/components/Navdrawer/Navdrawer";
import router from "@/router";
import { db, currentOrders } from "@/fb";

export default {
  name: "newCustomer",
  components: { Navdrawer },

  data: () => ({
    delivery: true,
    valid: false,
    phoneNumber: "",
    name: "",
    address: "",
    aptBizNumber: "",
    aptBizName: "",
    customerNotes: "",
    internalNotes: "",
    locationTypes: ["Home", "Apartment", "Business"],
    locationType: "",
    search: "",
    dialog: false,
    newCustomer: [],
    selectedIndex: -1,
    selectedItem: {
      id: -1,
      phoneNumber: "",
      name: "",
      locationType: "",
      address: "",
      aptBizNumber: "",
      aptBizName: "",
      customerNotes: "",
      internalNotes: ""
    },
    defaultItem: {
      id: 0,
      phoneNumber: "",
      name: "",
      locationType: "",
      address: "",
      aptBizNumber: "",
      aptBizName: "",
      customerNotes: "",
      internalNotes: ""
    }
  }),

  // computed: {
  //   modalTitle() {
  //     return this.selectedIndex === -1 ? "Add New Shift" : "Edit Shift";
  //   }
  // },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  // created() {
  //   currentOrders.get().then(snapshot => {
  //     snapshot.forEach(doc => {
  //       this.newCustomer.push({
  //         id: doc.id,
  //         phoneNumber: doc.data().phoneNumber,
  //         name: doc.data().name,
  //         locationType: doc.data().locationType,
  //         address: doc.data().address,
  //         aptBizNumber: doc.data().aptBizNumber,
  //         aptBizName: doc.data().aptBizName,
  //         customerNotes: doc.data().customerNotes,
  //         internalNotes: doc.data().internalNotes
  //       });
  //     });
  //   });
  // },

  methods: {
    initialize() {},

    // editItem(item) {
    //   this.selectedIndex = this.newCustomer.indexOf(item);
    //   this.selectedItem = Object.assign({}, item);
    //   this.dialog = true;
    //   console.log(this.selectedIndex);
    //   console.log(this.selectedItem.id);
    // },

    // close() {
    //   this.dialog = false;
    //   setphoneNumberout(() => {
    //     this.selectedItem = Object.assign({}, this.defaultItem);
    //     this.selectedIndex = -1;
    //   }, 300);
    // },

    startOrder() {
      if (this.selectedIndex > -1) {
        Object.assign(this.newCustomer[this.selectedIndex], this.selectedItem);
        currentOrders
          .doc(this.selectedItem.id)
          .set(this.selectedItem)
          .then(docRef => {
            this.close();
          })
          .catch(error => {
            alert("Error occured while updating the schedule");
            console.log(error);
          });
      } else {
        const time = Date.now();
        this.selectedItem.id = String(time);
        this.newCustomer.push(this.selectedItem);
        currentOrders
          .doc(this.selectedItem.id)
          .set(this.selectedItem)
          .then(docRef => {
            this.close;
          })
          .catch(error => {
            alert("Error occured while adding into schedule");
            console.log(error);
          });
      }
      // router.push({
      //   name: "deliverymenu"
      // });
    }

    // home() {
    //   router.push({
    //     name: "admin"
    //   });
    // }
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
</style>
