<template>
  <v-container fluid>
    <v-card>
      <v-container wrap>
        <v-layout wrap justify-center align-center>
          <v-layout wrap justify-center align-center>
            <v-flex mr-2 md5>
              <v-text-field v-model="customer.name" label="Name"></v-text-field>
            </v-flex>
            <v-flex mr-2 md5>
              <!-- Phone Number gets transfered here from the Phone page input-->

              <v-text-field v-model="customer.phoneNumber" label="Phone Number"></v-text-field>
            </v-flex>

            <!--  -->

            <!--  -->
            <!--  -->

            <v-flex mr-2 md2>
              <v-select v-model="customer.locationType" :items="locationTypes" label="Location Type"></v-select>
            </v-flex>

            <v-flex mr-2 md4>
              <v-text-field clearable v-model="customer.address" label="Address"></v-text-field>
            </v-flex>

            <v-flex mr-2 md2>
              <v-text-field v-model="customer.aptBizNumber" label="Apt/Biz #"></v-text-field>
            </v-flex>
            <v-flex mr-2 md2>
              <v-text-field v-model="customer.aptBizName" label="Apt/Biz Name"></v-text-field>
            </v-flex>

            <v-flex mr-2 md5>
              <v-text-field v-model="customer.customerNotes" label="Customer Notes"></v-text-field>
            </v-flex>
            <v-flex mr-2 md5>
              <v-text-field v-model="customer.internalNotes" label="Internal Notes"></v-text-field>
            </v-flex>

            <v-flex mr-2 md2>
              <v-text-field v-model="customer.firstOrderDate" class="centered-input" label="First Order Date"></v-text-field>
            </v-flex>

            <v-flex mr-2 md2>
              <v-text-field
                v-model="customer.numberOfOrders"
                class="centered-input"
                label="Number of Orders"
              ></v-text-field>
            </v-flex>

            <v-flex mr-2 md2>
              <v-text-field
                v-model="customer.dollarsSpent"
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
              <v-btn large @click="update">
                Update Info
                <v-icon right>save</v-icon>
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
                <v-icon right large @click="addPickupCustomer">transfer_within_a_station</v-icon>
              </v-btn>

              <v-btn large>
                Delivery
                <!-- Icon goes to 'views/DeliveryMenu/orderID/customerID' -->
                <v-icon right large @click="addDeliveryCustomer">drive_eta</v-icon>
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
import { db, customers } from "@/fb";

export default {
  props: [
    'customerID'
  ],
  data() {
    return {
      customer: {
      },
      // valid: false,
      // phoneNumber: "",
      // customerName: "",
      // address: "",
      // aptBizNumber: "",
      // aptBizName: "",
      // customerNotes: "",
      // internalNotes: "",
      locationTypes: ["Home", "Apartment", "Business"],
      // locationType: "",
      // firstOrderDate: '',
      // numberOfOrders: null,
      // dollarsSpent: null,
    };
  },
  // components: { Navdrawer2 },
  created() {
    if(this.customerID) {
      this.customer.customerID = this.customerID
      customers
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            if(doc.id === this.customerID) {
              this.customer = doc.data()
            }
          })
        })
    }
  },
  methods: {
    addDeliveryCustomer() {
      this.$router.push("/deliverymenu");
      const newCustomer = {
        
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
    },
    update() {
      customers
        .doc(this.customer.customerID)
        .set(this.customer)
        .then(docRef => {
          alert('Customer Info successfully updated')
        })
        .catch(error => {
          alert('Error occured while updating customer info')
          console.log(error)
        })
    },
    
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
