<template>
  <v-container fluid>
    <customer-info-dialog ref="dialogBox"/>
    <v-card>
      <v-container wrap>
        <v-layout wrap justify-center align-center>
          <v-layout wrap justify-center align-center>
            <v-flex mr-2 md5>
              <v-text-field readonly v-model="customer.name" label="Name"></v-text-field>
            </v-flex>
            <v-flex mr-2 md5>
              <!-- Phone Number gets transfered here from the Phone page input-->

              <v-text-field
                mask="###-###-####"
                readonly
                v-model="customer.phoneNumber"
                label="Phone Number"
              ></v-text-field>
            </v-flex>

            <!--  -->

            <!--  -->
            <!--  -->

            <v-flex mr-2 md2>
              <v-text-field readonly v-model="customer.locationType" label="Location Type"></v-text-field>
            </v-flex>

            <v-flex mr-2 md4>
              <v-text-field readonly v-model="customer.address" label="Address"></v-text-field>
            </v-flex>

            <v-flex mr-2 md2>
              <v-text-field readonly v-model="customer.aptBizNumber" label="Apt/Biz #"></v-text-field>
            </v-flex>
            <v-flex mr-2 md2>
              <v-text-field readonly v-model="customer.aptBizName" label="Apt/Biz Name"></v-text-field>
            </v-flex>

            <v-flex mr-2 md5>
              <v-text-field readonly v-model="customer.customerNotes" label="Customer Notes"></v-text-field>
            </v-flex>
            <v-flex mr-2 md5>
              <v-text-field readonly v-model="customer.internalNotes" label="Internal Notes"></v-text-field>
            </v-flex>

            <v-flex mr-2 md2>
              <v-text-field readonly v-model="customer.date" label="First Order Date"></v-text-field>
            </v-flex>

            <v-flex mr-2 md2>
              <v-text-field
                readonly
                v-model="customer.numberOfOrders"
                class="centered-input"
                label="Number of Orders"
              ></v-text-field>
            </v-flex>

            <v-flex mr-2 md2>
              <v-text-field
                readonly
                v-model="customer.dollarsSpent"
                class="centered-input"
                label="Total Dollars Spent"
                prefix="$"
              ></v-text-field>
            </v-flex>
            <v-flex mr-2 md2>
              <v-text-field
                readonly
                v-model="customer.credits"
                class="centered-input"
                label="Credits"
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
              <v-btn large @click="edit">
                Edit Customer Info
                <v-icon right>edit</v-icon>
              </v-btn>
            </v-flex>
            <v-spacer></v-spacer>
            <v-divider vertical></v-divider>
            <v-spacer></v-spacer>
            <v-flex>
              <!-- Button -->
              <v-btn large @click="pickup">
                Pickup
                <!-- Icon goes to 'views/InshopMenu/orderID/customerID' -->
                <v-icon right large>transfer_within_a_station</v-icon>
              </v-btn>

              <v-btn large @click="delivery">
                Delivery
                <!-- Icon goes to 'views/DeliveryMenu/orderID/customerID' -->
                <v-icon right large>drive_eta</v-icon>
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
import { db, customers, buildingOrder } from "@/fb";
import CustomerInfoDialog from "@/components/CustomerInfoDialog";

export default {
  props: ["customerID"],
  components: {
    CustomerInfoDialog
  },
  data() {
    return {
      customer: {},
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
      // date: '',
      // numberOfOrders: null,
      // dollarsSpent: null,
      dialogShow: false
    };
  },
  // components: { Navdrawer2 },
  created() {
    if (this.customerID) {
      this.customer.customerID = this.customerID;
      customers.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.id === this.customerID) {
            this.customer = doc.data();
          }
        });
      });
    }
  },
  methods: {
    delivery() {
      console.log('delivery')
      if(this.customerID) {
        const time = Date.now();
        let newBuildingOrder = {
          orderID: "",
          orderType: "Delivery",
          customerID: this.customerID
        };
        if (confirm("Are you sure to make a new delivery order?")) {
          newBuildingOrder.orderID = String(time);
          buildingOrder
            .doc(newBuildingOrder.orderID)
            .set(newBuildingOrder)
            .then(docRef => {
              this.$router.push("/deliverymenu?order_id=" + newBuildingOrder.orderID + "&customer_id=" + this.customerID);
            })
            .catch(error => {
              alert("Error occurs while adding a new buildingOrder");
              console.log(error);
            });
        }
      }    
    },
    pickup() {
      console.log('pickup')
      if(this.customerID) {
        const time = Date.now();
        let newBuildingOrder = {
          orderID: "",
          orderType: "PickUp",
          customerID: this.customerID
        };
        if (confirm("Are you sure to make a new pickup order?")) {
          newBuildingOrder.orderID = String(time);
          buildingOrder
            .doc(newBuildingOrder.orderID)
            .set(newBuildingOrder)
            .then(docRef => {
              this.$router.push("/pickupmenu?order_id=" + newBuildingOrder.orderID + "&customer_id=" + this.customerID);
            })
            .catch(error => {
              alert("Error occurs while adding a new buildingOrder");
              console.log(error);
            });
        }
      }
    },

    edit() {
      this.$refs.dialogBox.show(this.customer);
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
