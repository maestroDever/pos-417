<template>
  <div>
    <v-toolbar height="75">
      <v-toolbar-title>Past Employees</v-toolbar-title>
      <v-divider color="white" class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-flex md4 mb-2>
        <v-text-field
          v-model="search"
          prepend-icon="search"
          clearable
          label="Search For Past Employees"
          color="white"
          hide-details
        ></v-text-field>
      </v-flex>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-dialog dark v-model="dialog" max-width="750px" persistent>
        <template v-slot:activator="{ on }">
          <v-spacer></v-spacer>
          <!-- <v-btn color="primary" dark class="mb-2" v-on="on">
            <v-icon left dark>add_circle_outline</v-icon>Add New Employee
          </v-btn>-->
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ modalTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-layout>
                  <v-flex mr-3>
                    <v-text-field v-model="selectedItem.date" label="Hire Date"></v-text-field>
                  </v-flex>
                  <!-- Date Picker -->
                  <v-flex>
                    <v-menu
                      v-model="menu"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      min-width="290px"
                    >
                      <v-text-field :value="formattedDate" slot="activator" label="Fire Date"></v-text-field>
                      <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
                    </v-menu>
                  </v-flex>

                  <v-flex md4>
                    <v-select :items="items" label="Status" v-model="selectedItem.status"></v-select>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-text-field v-model="selectedItem.name" label="Name"></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="selectedItem.phoneNumber" label="Phone Number"></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-text-field v-model="selectedItem.securityLevel" label="Security Level"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="selectedItem.address" label="Address"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="selectedItem.email" label="Email"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-text-field v-model="selectedItem.position1" label="Position 1"></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-text-field v-model="selectedItem.wage1" label="Wage 1"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="selectedItem.position2" label="Position 2"></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-text-field v-model="selectedItem.wage2" label="Wage 2"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="selectedItem.mvr" label="MVR"></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="selectedItem.mvrExpires" label="MVR Expires"></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="selectedItem.dlNumber" label="DL Number"></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="selectedItem.dlExpires" label="DL Expires"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                      :append-icon="show1 ? 'visibility' : 'visibility_off'"
                      :type="show1 ? 'text' : 'password'"
                      v-model="selectedItem.passCode"
                      label="Pass Code"
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-flex mb-3 text-xs-right>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save('local')">Save</v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :rowsPerPageItems="[8]"
      :headers="headers"
      :items="pastEmployees"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.name }}</td>
        <!-- <td class="text-xs-center">{{ props.item.active }}</td> -->
        <td class="text-xs-center">{{ props.item.securityLevel }}</td>
        <td class="text-xs-center">{{ props.item.position1 }}</td>
        <td class="text-xs-center">{{ props.item.wage1 }}</td>
        <!-- <td class="text-xs-center">{{ props.item.position2 }}</td>
        <td class="text-xs-center">{{ props.item.wage2 }}</td>-->
        <td class="text-xs-center">{{ props.item.phoneNumber }}</td>
        <!-- <td class="text-xs-center">{{ props.item.address }}</td> -->
        <td class="text-xs-center">{{ props.item.email }}</td>
        <td class="justify-center layout px-0">
          <v-icon left large @click="editItem(props.item)">edit</v-icon>
          <v-icon medium @click="deleteItem(props.item)">delete</v-icon>
          <v-icon large right @click="upward(props.item)">arrow_upward</v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { db, pastEmployees } from "@/fb";
import router from "@/router";
import AdminNavdrawer from "@/components/Navdrawer/AdminNavdrawer";
import format from "date-fns/format";

export default {
  name: "pastEmployees",
  components: { AdminNavdrawer },

  data: () => ({
    items: ["Active", "Inactive"],
    show1: false,
    search: "",
    dialog: false,
    date: new Date().toISOString().substr(0, 10),
    modal: false,
    menu: false,
    headers: [
      {
        text: "Name",
        align: "center",
        align: "center",
        sortable: false,
        value: "name"
      },
      // { text: "Active", align: "center", value: "active" },
      {
        text: "Security Level",
        align: "center",
        value: "securityLevel"
      },
      {
        text: "Position 1",
        align: "center",
        value: "position1"
      },
      {
        text: "Wage 1",
        align: "center",
        value: "wage1"
      },
      // { text: "Position 2", sortable: false, value: "position2" },
      // { text: "Wage 2", sortable: false, value: "wage2" },
      {
        text: "Phone Number",
        align: "center",
        sortable: false,
        value: "phoneNumber"
      },
      // { text: "Address", sortable: false, value: "address" },
      {
        text: "Email",
        align: "center",
        sortable: false,
        value: "email"
      },
      {
        text: "Actions",
        align: "center",
        value: "id",
        sortable: false
      }
    ],
    pastEmployees: [],
    selectedIndex: -1,
    selectedItem: {
      id: -1,
      date: "",
      name: "",
      active: "",
      securityLevel: "",
      position1: "",
      wage1: "",
      position2: "",
      wage2: "",
      phoneNumber: "",
      address: "",
      email: "",
      mvr: "",
      mvrExpires: "",
      dlNumber: "",
      dlExpires: "",
      passCode: ""
    },
    defaultItem: {
      id: 0,
      date: "",
      name: "",
      active: "",
      securityLevel: "",
      position1: "",
      wage1: "",
      position2: "",
      wage2: "",
      phoneNumber: "",
      address: "",
      email: "",
      mvr: "",
      mvrExpires: "",
      dlNumber: "",
      dlExpires: "",
      passCode: ""
    }
  }),

  computed: {
    formattedDate() {
      return this.date ? format(this.date, "MMMM D,  YYYY") : "";
    },
    modalTitle() {
      return this.selectedIndex === -1 ? "" : "Edit Past Employee Info";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    pastEmployees.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.pastEmployees.push({
          id: doc.id,
          date: doc.data().date,
          name: doc.data().name,
          active: doc.data().active,
          securityLevel: doc.data().securityLevel,
          position1: doc.data().position1,
          wage1: doc.data().wage1,
          position2: doc.data().position2,
          wage2: doc.data().wage2,
          phoneNumber: doc.data().phoneNumber,
          address: doc.data().address,
          email: doc.data().email,
          mvr: doc.data().mvr,
          mvrExpires: doc.data().mvrExpires,
          dlNumber: doc.data().dlNumber,
          dlExpires: doc.data().dlExpires,
          passCode: doc.data().passCode
        });
      });
    });
  },

  ready() {
    this.$on("upward", item => {
      // this.deleteItem(item)
    });
  },

  methods: {
    initialize() {},

    upward(item) {
      this.$emit("upward", item);
    },

    editItem(item) {
      this.selectedIndex = this.pastEmployees.indexOf(item);
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
    },

    selectItem(item) {
      this.selectedIndex = this.pastEmployees.indexOf(item);
      this.selectedItem = Object.assign({}, item);
    },

    deleteItem(item, source) {
      const index = this.pastEmployees.indexOf(item);
      if (source != "parent") {
        if (confirm("Are you sure you want to delete this employee?")) {
          pastEmployees
            .doc(item.id)
            .delete()
            .then(() => {})
            .catch(error => {
              alert("Error occured while trying to delete the employee.");
              console.log(error);
            });
          this.pastEmployees.splice(index, 1);
        }
      } else {
        pastEmployees
          .doc(item.id)
          .delete()
          .then(() => {})
          .catch(error => {
            alert("Error occured while trying to delete the employee.");
            console.log(error);
          });
        this.pastEmployees.splice(index, 1);
      }
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.selectedItem = Object.assign({}, this.defaultItem);
        this.selectedIndex = -1;
      }, 300);
    },

    save(source) {
      if (source === "parent") {
        if (
          !confirm(
            "Are you sure you want to move this employee to 'Past Employees'?"
          )
        )
          return;
        else this.$emit("deleteCurrent", this.selectedItem);
      }
      if (this.selectedIndex > -1) {
        Object.assign(
          this.pastEmployees[this.selectedIndex],
          this.selectedItem
        );
        pastEmployees
          .doc(this.selectedItem.id)
          .set(this.selectedItem)
          .then(docRef => {
            this.close();
          })
          .catch(error => {
            alert("Error occured while updating the employee");
            console.log(error);
          });
      } else {
        const time = Date.now();
        this.selectedItem.id = String(time);
        this.pastEmployees.push(this.selectedItem);
        pastEmployees
          .doc(this.selectedItem.id)
          .set(this.selectedItem)
          .then(docRef => {
            this.close;
          })
          .catch(error => {
            alert("Error occured while adding new employee");
            console.log(error);
          });
      }
      this.close();
    }
    // save() {
    //   if (this.selectedIndex > -1) {
    //     Object.assign(this.allpastEmployees[this.selectedIndex], this.selectedItem);
    //     allpastEmployees
    //       .doc(this.selectedItem.id)
    //       .set(this.selectedItem)
    //       .then(docRef => {
    //         this.close();
    //       })
    //       .catch(error => {
    //         alert("Error occured while updating the employee");
    //         console.log(error);
    //       });
    //   } else {
    //     const time = Date.now();
    //     this.selectedItem.id = String(time);
    //     this.allpastEmployees.push(this.selectedItem);
    //     allpastEmployees
    //       .doc(this.selectedItem.id)
    //       .set(this.selectedItem)
    //       .then(docRef => {
    //         this.close;
    //       })
    //       .catch(error => {
    //         alert("Error occured while adding the new employee");
    //         console.log(error);
    //       });
    //   }
    //   this.close();
    // }

    // home() {
    //   router.push({
    //     name: "admin"
    //   });
    // }
  }
};
</script>

<style>
</style>
