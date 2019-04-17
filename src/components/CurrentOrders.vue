<template>
  <div id="app">
    <div>
      <v-toolbar height="75">
        <v-toolbar-title>Current Orders</v-toolbar-title>
        <v-divider color="white" class="mx-2" inset vertical></v-divider>

        <v-spacer></v-spacer>
        <v-flex md4 mb-2>
          <v-text-field
            v-model="search"
            prepend-icon="search"
            clearable
            label="Search"
            color="white"
            hide-details
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <!-- <v-btn color="primary" dark class="mb-2" v-on="on">
                <v-icon left dark>add_circle_outline</v-icon>Add New Customer
            </v-btn>-->
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ modalTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="selectedItem.orderNumber" label="Order Number"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="selectedItem.orderTime" label="Order Time"></v-text-field>
                  </v-flex>
                  <!-- <v-flex xs12 sm6 md4>
                      <v-text-field v-model="selectedItem.credits" label="Credits"></v-text-field>
                  </v-flex>-->
                  <v-flex>
                    <v-text-field v-model="selectedItem.orderType" label="Order Type"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="selectedItem.orderTotal" label="Order Total"></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-text-field v-model="selectedItem.timeElapsed" label="Time Elapsed"></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-text-field v-model="selectedItem.customerName" label="Customer Name"></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-text-field v-model="selectedItem.customerAddress" label="Customer Address"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table
        :rowsPerPageItems="[8]"
        :headers="headers"
        :items="currentOrders"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.orderNumber }}</td>
          <td>{{ props.item.orderTime }}</td>
          <td>{{ props.item.orderType }}</td>
          <td>{{ props.item.orderTotal }}</td>
          <td>{{ props.item.timeElapsed }}</td>
          <!-- <td class="text-xs-left">{{ props.item.customerName }}</td>
          <td class="text-xs-left">{{ props.item.customerAddress }}</td>-->

          <td class="text-xs-center">
            <!-- Icon goes to 'views/CustomerProfile/customerID' -->
            <v-icon large>arrow_forward</v-icon>
          </td>
          <td class="text-xs-center">
            <!-- Icon goes to 'views/InshopMenu/orderID/customerID' -->
            <v-icon x-large>edit</v-icon>
          </td>
          <td class="text-xs-center">
            <!-- Icon moves order from db collection 'currentOrders' to db collect 'voidedOrders' -->
            <v-icon x-large>close</v-icon>
          </td>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import { db, currentOrders } from "@/fb";
import router from "@/router";
// import Navdrawer from "@/components/Navdrawer/Navdrawer";

export default {
  name: "thisWeeksSchedule",
  // components: { Navdrawer },

  data: () => ({
    search: "",
    dialog: false,
    date: "4/1 - 4/7",
    headers: [
      { text: "Order Number", value: "orderNumber" },
      { text: "Order Time", value: "orderTime" },
      {
        text: "Order Type",
        align: "left",
        value: "orderType"
      },

      { text: "Order Total", value: "orderTotal" },

      { text: "Time Elapsed", value: "timeElapsed" },
      // { text: "Customer Name", sortable: false, value: "customerName" },
      // { text: "Customer Address", sortable: false, value: "customerAddress" },
      // { text: "Customer Notes", sortable: false, value: "customerNotes" },
      // { text: "Internal Notes", sortable: false, value: "internalNotes" },
      {
        text: "View Order",
        align: "center",
        value: "viewOrder",
        sortable: false
      },
      {
        text: "Edit Order",
        align: "center",
        value: "editOrder",
        sortable: false
      },
      {
        text: "Void Order",
        align: "center",
        value: "voidOrder",
        sortable: false
      }
    ],
    currentOrders: [],
    selectedIndex: -1,
    selectedItem: {
      id: -1,
      orderNumber: "",
      orderTime: "",
      orderType: "",
      orderTotal: "",
      timeElapsed: "",
      customerName: "",
      customerAddress: ""
    },
    defaultItem: {
      id: 0,
      orderNumber: "",
      orderTime: "",
      orderType: "",
      orderTotal: "",
      timeElapsed: "",
      customerName: "",
      customerAddress: ""
    }
  }),

  computed: {
    modalTitle() {
      return this.selectedIndex === -1 ? "Add New Order" : "Edit Order";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    currentOrders.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.currentOrders.push({
          id: doc.id,
          orderNumber: doc.data().orderNumber,
          orderTime: doc.data().orderTime,
          orderType: doc.data().orderType,
          orderTotal: doc.data().orderTotal,
          timeElapsed: doc.data().timeElapsed,
          customerName: doc.data().customerName,
          customerAddress: doc.data().customerAddress
        });
      });
    });
  },

  methods: {
    initialize() {},

    editItem(item) {
      this.selectedIndex = this.currentOrders.indexOf(item);
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
      console.log(this.selectedIndex);
      console.log(this.selectedItem.id);
    },

    deleteItem(item) {
      const index = this.currentOrders.indexOf(item);
      if (confirm("Are you sure you want to delete this item?")) {
        this.currentOrders.splice(index, 1);
        currentOrders
          .doc(item.id)
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
      setnameout(() => {
        this.selectedItem = Object.assign({}, this.defaultItem);
        this.selectedIndex = -1;
      }, 300);
    },

    save() {
      if (this.selectedIndex > -1) {
        Object.assign(
          this.currentOrders[this.selectedIndex],
          this.selectedItem
        );
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
        const name = Date.now();
        this.selectedItem.id = String(name);
        this.currentOrders.push(this.selectedItem);
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
      this.close();
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
</style>