<template>
  <div id="app">
    <v-app id="inspire">
      <v-card flat color="rgb(255, 0, 0, 0.0)">
        <v-layout mt-3>
          <v-flex></v-flex>
          <v-flex text-xs-center mb-3>
            <h1 class="display-3">Customer Search</h1>
          </v-flex>

          <v-flex text-xs-center mt-4>
            <router-link to="/mainmenu">
              <v-icon large>home</v-icon>
              <h5>Home</h5>
            </router-link>
          </v-flex>
        </v-layout>
      </v-card>
      <div>
        <v-toolbar height="75">
          <v-toolbar-title>Customers</v-toolbar-title>
          <v-divider color="white" class="mx-2" inset vertical></v-divider>

          <v-spacer></v-spacer>
          <v-flex mb-2>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              color="white"
              hide-details
            ></v-text-field>
          </v-flex>
          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" max-width="500px">
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
                    <v-flex xs12 sm6 md6>
                      <v-text-field v-model="selectedItem.name" label="Name"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field v-model="selectedItem.phoneNumber" label="Phone Number"></v-text-field>
                    </v-flex>
                    <!-- <v-flex xs12 sm6 md4>
                      <v-text-field v-model="selectedItem.credits" label="Credits"></v-text-field>
                    </v-flex>-->
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="selectedItem.locationType" label="Location Type"></v-text-field>
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
          :items="schedules"
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
              <v-icon large class="mr-2" @click="customerProfileID()">list</v-icon>
            </td>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </div>
    </v-app>
    <Navdrawer/>
  </div>
</template>

<script>
import { db } from "@/fb";
import router from "@/router";
import Navdrawer from "@/components/Navdrawer/Navdrawer";

export default {
  name: "thisWeeksSchedule",
  components: { Navdrawer },

  data: () => ({
    search: "",
    dialog: false,
    date: "4/1 - 4/7",
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
      { text: "Actions", align: "center", value: "id", sortable: false }
    ],
    schedules: [],
    selectedIndex: -1,
    selectedItem: {
      id: -1,
      name: "",
      phoneNumber: "",
      credits: "0",
      locationType: "",
      address: "",
      aptBizNumber: "",
      aptBizName: "",
      customerNotes: "",
      internalNotes: ""
    },
    defaultItem: {
      id: 0,
      name: "",
      phoneNumber: "",
      credits: "0",
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
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    customerSearch.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.schedules.push({
          id: doc.id,
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
      this.selectedIndex = this.schedules.indexOf(item);
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
      console.log(this.selectedIndex);
      console.log(this.selectedItem.id);
    },

    deleteItem(item) {
      const index = this.schedules.indexOf(item);
      if (confirm("Are you sure you want to delete this item?")) {
        this.schedules.splice(index, 1);
        customerSearch
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
        Object.assign(this.schedules[this.selectedIndex], this.selectedItem);
        customerSearch
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
        this.schedules.push(this.selectedItem);
        customerSearch
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
