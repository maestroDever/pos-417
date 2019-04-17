<template>
  <div id="app">
    <v-card flat color="rgb(255, 0, 0, 0.0)">
      <v-layout mt-3>
        <v-flex text-xs-center mb-3>
          <h1 class="display-3">Customer Management</h1>
        </v-flex>
      </v-layout>
    </v-card>
    <div>
      <v-toolbar height="75">
        <v-toolbar-title>Customer Database</v-toolbar-title>
        <v-divider color="white" class="mx-2" inset vertical></v-divider>

        <v-spacer></v-spacer>
        <v-flex md4 mb-2>
          <v-text-field
            v-model="search"
            prepend-icon="search"
            clearable
            label="Search Customer Database"
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
                    <v-flex>
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
                    <v-flex xs12 sm6 md4>
                      <v-text-field prefix="$" v-model="selectedItem.credits" label="Add Credits"></v-text-field>
                    </v-flex>
                    <!--  -->
                  </v-layout>
                  <v-layout wrap>
                    <v-flex md4>
                      <v-text-field v-model="selectedItem.name" label="Name"></v-text-field>
                    </v-flex>
                    <v-flex md4>
                      <v-text-field
                        mask="###-###-####"
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
                    <v-flex md6>
                      <v-text-field v-model="selectedItem.address" label="Address"></v-text-field>
                    </v-flex>
                    <v-flex md2>
                      <v-text-field v-model="selectedItem.aptBizNumber" label="Apt/Biz #"></v-text-field>
                    </v-flex>
                    <v-flex md4>
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
        :rowsPerPageItems="[7]"
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

          <td class="justify-center layout px-0">
            <!-- Icon button opens up dialog pop up.  Inside of the dialog box is will render the 'views/CustomerProfile?customer_id=XXXXXXXXXXXXX' -->
            <v-icon large left @click="customerProfileID(props.item.customerID)">more_horiz</v-icon>
            <v-icon medium center class="mr-2" @click="editItem(props.item)">edit</v-icon>

            <v-icon small right @click="deleteItem(props.item)">delete</v-icon>
          </td>
        </template>
      </v-data-table>
    </div>

    <AdminNavdrawer/>
  </div>
</template>

<script>
import { db, customers } from "@/fb";
import router from "@/router";
import AdminNavdrawer from "@/components/Navdrawer/AdminNavdrawer";
import format from "date-fns/format";

export default {
  name: "thisWeeksSchedule",
  components: { AdminNavdrawer },
  data: () => ({
    search: "",
    date: new Date().toISOString().substr(0, 10),

    dialog: false,

    menu: false,
    locationType: ["House", "Apartment", "Business"],
    headers: [
      { text: "Name", align: "left", sortable: false, value: "name" },
      { text: "Phone Number", value: "phoneNumber" },
      { text: "Credits", sortable: false, value: "credits" },
      { text: "Location Type", sortable: false, value: "locationType" },
      { text: "Address", sortable: false, value: "address" },
      { text: "Apt/Biz #", sortable: false, value: "aptBizNumber" },
      { text: "Apt/Biz Name", sortable: false, value: "aptBizName" },
      // { text: "Customer Notes", sortable: false, value: "customerNotes" },
      // { text: "Internal Notes", sortable: false, value: "internalNotes" },
      { text: "Actions", align: "center", value: "id", sortable: false }
    ],
    customers: [],
    selectedIndex: -1,
    selectedItem: {
      customerID: -1,
      date: new Date().toISOString().substr(0, 10),
      name: "",
      phoneNumber: "",
      credits: "",
      locationType: "",
      address: "",
      aptBizNumber: "",
      aptBizName: "",
      customerNotes: "",
      internalNotes: ""
    },
    defaultItem: {
      customerID: 0,
      date: new Date().toISOString().substr(0, 10),
      name: "",
      phoneNumber: "",
      credits: "",
      locationType: "",
      address: "",
      aptBizNumber: "",
      aptBizName: "",
      customerNotes: "",
      internalNotes: ""
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
      val || this.close();
    }
  },
  created() {
    customers.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.customers.push({
          customerID: doc.data().customerID,
          date: doc.data().date,
          name: doc.data().name,
          phoneNumber: doc.data().phoneNumber,
          credits: doc.data().credits,
          locationType: doc.data().locationType,
          address: doc.data().address,
          aptBizNumber: doc.data().aptBizNumber,
          aptBizName: doc.data().aptBizName,
          customerNotes: doc.data().customerNotes,
          internalNotes: doc.data().internalNotes
        });
      });
    });
  },
  methods: {
    initialize() {},
    editItem(item) {
      this.selectedIndex = this.customers.indexOf(item);
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
      console.log(this.selectedIndex);
      console.log(this.selectedItem.customerID);
    },
    deleteItem(item) {
      const index = this.customers.indexOf(item);
      if (confirm("Are you sure you want to delete this customer?")) {
        this.customers.splice(index, 1);
        customers
          .doc(item.customerID)
          .delete()
          .then(() => {})
          .catch(error => {
            alert("Error occured while trying to delete the customer.");
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
            alert("Error occured while updating the customer");
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
            alert("Error occured while adding the customer");
            console.log(error);
          });
      }
      this.close();
    },
    customerProfileID(customer_id) {
      this.$router.push("/customerprofile?customerID=" + customer_id);
    }
  }
};
</script>

<style>
.display-3 {
  text-decoration: underline;
  color: white;
}
</style>