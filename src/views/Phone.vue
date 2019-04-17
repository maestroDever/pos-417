<template>
  <div id="app">
    <v-layout mt-3>
      <v-flex text-xs-center mb-3>
        <h1 class="display-3">Phone Order</h1>
      </v-flex>
    </v-layout>

    <div>
      <v-toolbar height="75">
        <v-toolbar-title>Customer</v-toolbar-title>
        <v-divider color="white" class="mx-2" inset vertical></v-divider>

        <v-spacer></v-spacer>
        <!-- <v-flex mb-2>
          <v-text-field
            v-model="search1"
            prepend-icon="search"
            clearable
            label="Enter Name"
            color="white"
            hide-details
          ></v-text-field>
        </v-flex>-->

        <v-spacer></v-spacer>
        <v-flex md4 mb-2>
          <v-text-field
            v-model="search"
            prepend-icon="search"
            mask="(###) ### - ####"
            clearable
            label="Search By Phone Number"
            color="white"
            hide-details
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>

        <v-dialog persistent dark v-model="dialog" max-width="750px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">
              <v-icon left dark>add_circle_outline</v-icon>Add New Customer
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ modalTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-layout wrap>
                    <!-- Date Picker 1 -->
                    <v-flex md6>
                      <v-menu
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        min-width="290px"
                      >
                        <v-text-field :value="formattedDate" slot="activator" label="Date"></v-text-field>
                        <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <!-- <v-flex md4>
                      <v-select
                        :items="orderType"
                        v-model="selectedItem.orderType"
                        label="Delivery or Pickup"
                      ></v-select>
                    </v-flex>-->
                  </v-layout>

                  <v-layout wrap>
                    <v-flex md4>
                      <v-text-field v-model="selectedItem.name" label="Name"></v-text-field>
                    </v-flex>
                    <v-flex md4>
                      <v-text-field
                        mask="(###) ### - ####"
                        v-model="selectedItem.phoneNumber"
                        label="Phone Number"
                      ></v-text-field>
                    </v-flex>
                    <v-flex md4>
                      <v-select
                        :items="locationType"
                        v-model="selectedItem.locationType"
                        label="Location Type"
                      ></v-select>
                    </v-flex>
                    <v-flex>
                      <v-text-field v-model="selectedItem.address" label="Address"></v-text-field>
                    </v-flex>

                    <v-flex>
                      <v-text-field v-model="selectedItem.aptBizNumber" label="Apt/Biz #"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field v-model="selectedItem.aptBizName" label="Apt/Biz Name"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field v-model="selectedItem.customerNotes" label="Customer Notes"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field v-model="selectedItem.internalNotes" label="Internal Notes"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <!-- Save button goes to newly created customer profile by ID (Firebase) -->
              <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table
        :rowsPerPageItems="[1]"
        :headers="headers"
        :items="customers"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.phoneNumber }}</td>
          <td class="text-xs-left">{{ props.item.credits }}</td>
          <td class="text-xs-left">{{ props.item.locationType }}</td>
          <td class="text-xs-left">{{ props.item.address }}</td>
          <td class="text-xs-left">{{ props.item.aptBizNumber }}</td>
          <td class="text-xs-left">{{ props.item.aptBizName }}</td>

          <td class="text-xs-center">
            <!-- Icon goes to 'views/CustomerProfile?customerID=' -->
            <v-icon large @click="customerProfileID(props.item.customerID)">assignment_ind</v-icon>
          </td>
          <td>
            <!-- Icon goes to 'views/InshopMenu?orderID=?customerID=' -->
            <v-icon x-large @click="pickup(props.item.customerID)">transfer_within_a_station</v-icon>
          </td>

          <td>
            <!-- Icon goes to 'views/DeliveryMenu?orderID=?customerID=' -->
            <v-icon x-large @click="delivery()">drive_eta</v-icon>
          </td>
        </template>
      </v-data-table>
      <v-flex text-xs-center mt-3>
        <h1 class="announcment">***Don't forget to offer a cookie or brownie!!!***</h1>
      </v-flex>
    </div>

    <Navdrawer/>
  </div>
</template>

<script>
import { db, customers, buildingOrder } from "@/fb";
import router from "@/router";
import Navdrawer from "@/components/Navdrawer/Navdrawer";
import format from "date-fns/format";

export default {
  name: "Phone",
  components: { Navdrawer },

  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    search: "",

    modal: false,
    menu: false,
    dialog: false,
    locationType: ["Home", "Apartment", "Business"],
    orderType: ["Delivery", "Pickup"],
    headers: [
      { text: "Name", align: "left", sortable: false, value: "name" },
      { text: "Phone Number", sortable: false, value: "phoneNumber" },
      { text: "Credits", value: "credits" },
      { text: "Location Type", sortable: false, value: "locationType" },
      { text: "Address", sortable: false, value: "address" },
      { text: "Apt/Biz #", sortable: false, value: "aptBizNumber" },
      { text: "Apt/Biz Name", sortable: false, value: "aptBizName" },
      // { text: "Customer Notes", sortable: false, value: "customerNotes" },
      // { text: "Internal Notes", sortable: false, value: "internalNotes" },
      {
        text: "Customer Profile",

        value: "customerProfile",
        sortable: false
      },
      {
        text: "Pickup",

        value: "pickup",
        sortable: false
      },
      {
        text: "Delivery",

        value: "delivery",
        sortable: false
      }
    ],
    customers: [],
    selectedIndex: -1,
    selectedItem: {
      customerID: -1,
      date: new Date().toISOString().substr(0, 10),
      name: "",
      phoneNumber: "",
      credits: "0",
      locationType: "",
      address: "",
      cityState: "Scottsdale, AZ",
      aptBizNumber: "",
      aptBizName: "",
      customerNotes: "",
      internalNotes: "",
      totalOrders: "",
      totalDollarsSpent: "0"
    },
    defaultItem: {
      customerID: 0,
      date: new Date().toISOString().substr(0, 10),
      name: "",
      phoneNumber: "",
      credits: "0",
      locationType: "",
      address: "",
      cityState: "Scottsdale, AZ",
      aptBizNumber: "",
      aptBizName: "",
      customerNotes: "",
      internalNotes: "",
      totalOrders: "",
      totalDollarsSpent: "0"
    }
  }),

  computed: {
    modalTitle() {
      return this.selectedIndex === -1 ? "Add New Customer" : "Edit Customer";
    },

    formattedDate() {
      return this.date ? format(this.date, "MMMM D,  YYYY") : "";
    }
  },

  watch: {
    dialog(val) {
      // val || this.close();
      if (val) {
        this.selectedItem.phoneNumber = this.search;
        return val;
      } else this.close();
    }
  },

  created() {
    customers.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.customers.push({
          customerID: doc.data().customerID,
          date: doc.data().date,
          orderType: doc.data().orderType,
          name: doc.data().name,
          phoneNumber: doc.data().phoneNumber,
          credits: doc.data().credits,
          locationType: doc.data().locationType,
          address: doc.data().address,
          cityState: doc.data().cityState,
          aptBizNumber: doc.data().aptBizNumber,
          aptBizName: doc.data().aptBizName,
          customerNotes: doc.data().customerNotes,
          internalNotes: doc.data().internalNotes,
          totalOrders: doc.data().totalOrders,
          totalDollarsSpent: doc.data().totalDollarsSpent
        });
      });
    });
  },

  methods: {
    initialize() {
      this.search = "";
    },

    editItem(item) {
      this.selectedIndex = this.customers.indexOf(item);
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
      console.log(this.selectedIndex);
      console.log(this.selectedItem.customerID);
    },

    deleteItem(item) {
      const index = this.customers.indexOf(item);
      if (confirm("Are you sure you want to delete this item?")) {
        this.customers.splice(index, 1);
        customers
          .doc(item.customerID)
          .delete()
          .then(() => {})
          .catch(error => {
            alert("Error occured while trying to delete the schedule.");
            console.log(error);
          });
      }
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.selectedItem = Object.assign({}, this.defaultItem);
        this.selectedIndex = -1;
      }, 300);
    },

    save() {
      if (this.selectedIndex > -1) {
        Object.assign(this.customers[this.selectedIndex], this.selectedItem);
        customers
          .doc(this.selectedItem.customerID)
          .set(this.selectedItem)
          .then(docRef => {
            this.close();
          })
          .catch(error => {
            alert("Error occured while updating the schedule");
            console.log(error);
          });
      } else {
        const name = Date.now();
        this.selectedItem.customerID = String(name);
        this.customers.push(this.selectedItem);
        customers
          .doc(this.selectedItem.customerID)
          .set(this.selectedItem)
          .then(docRef => {
            this.close;
          })
          .catch(error => {
            alert("Error occured while adding into schedule");
            console.log(error);
          });
      }
      this.close();
    },
    customerProfileID(customer_id) {
      this.$router.push("/customerprofile?customerID=" + customer_id);
    },
    pickup(customerID) {
      const time = Date.now();
      let newBuildingOrder = {
        orderID: "",
        orderType: "PickUp",
        customerID: customerID
      };
      if (confirm("Are you sure to make a new order?")) {
        newBuildingOrder.orderID = String(time);
        buildingOrder
          .doc(newBuildingOrder.orderID)
          .set(newBuildingOrder)
          .then(docRef => {
            this.$router.push("/pickupmenu?order_id=" + newBuildingOrder.orderID + "&customer_id=" + customerID);
          })
          .catch(error => {
            alert("Error occurs while adding a new buildingOrder");
            console.log(error);
          });
      }
    },
    delivery() {
      router.push({
        name: "deliverymenu"
      });
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
.display-3 {
  text-decoration: underline;
  color: white;
}
.announcment {
  color: red;
}
</style>
