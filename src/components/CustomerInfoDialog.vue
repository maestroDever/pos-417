<template>
  <v-dialog dark v-model="dialog" max-width="950px" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">Edit Customer Information</span>
      </v-card-title>

      <v-card-text>
        <v-layout wrap justify-center align-center>
          <v-flex mr-2 md5>
            <v-text-field v-model="customer.name" label="Name"></v-text-field>
          </v-flex>
          <v-flex mr-2 md5>
            <!-- Phone Number gets transfered here from the Phone page input-->

            <v-text-field mask="###-###-####" v-model="customer.phoneNumber" label="Phone Number"></v-text-field>
          </v-flex>

          <!--  -->

          <!--  -->
          <!--  -->

          <v-flex mr-2 md2>
            <v-select v-model="customer.locationType" :items="locationTypes" label="Location Type"></v-select>
          </v-flex>

          <v-flex mr-2 md4>
            <v-text-field v-model="customer.address" label="Address"></v-text-field>
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

          <v-flex mr-4 md2>
            <v-text-field readonly v-model="customer.date" label="First Order Date"></v-text-field>
          </v-flex>

          <v-flex mr-4 md2>
            <v-text-field
              readonly
              v-model="customer.numberOfOrders"
              class="centered-input"
              label="Number of Orders"
            ></v-text-field>
          </v-flex>

          <v-flex mr-4 md2>
            <v-text-field
              readonly
              v-model="customer.dollarsSpent"
              class="centered-input"
              label="Total Dollars Spent"
              prefix="$"
            ></v-text-field>
          </v-flex>
          <v-flex mr-4 md2>
            <v-text-field
              readonly
              v-model="customer.credits"
              class="centered-input"
              label="Credits"
              prefix="$"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-flex mb-3 text-xs-right>
          <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { db, customers } from "@/fb";

export default {
  data() {
    return {
      dialog: false,
      customer: {},
      locationTypes: ["Home", "Apartment", "Business"]
    };
  },

  methods: {
    show(person) {
      this.customer = person;
      this.dialog = true;
    },
    save() {
      customers
        .doc(this.customer.customerID)
        .set(this.customer)
        .then(docRef => {
          alert("Customer Info successfully updated");
          this.dialog = false;
        })
        .catch(error => {
          alert("Error occured while updating customer info");
          console.log(error);
        });
    }
  }
};
</script>
