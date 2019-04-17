<template>
  <div>
    <v-toolbar height="75">
      <v-toolbar-title>Current Employees</v-toolbar-title>
      <v-divider color="white" class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-flex md4 mb-2>
        <v-text-field
          v-model="search"
          prepend-icon="search"
          clearable
          label="Search For Current Employees"
          color="white"
          hide-details
        ></v-text-field>
      </v-flex>
      <v-spacer></v-spacer>

      <v-dialog dark v-model="dialog" max-width="750px" persistent>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">
            <v-icon left dark>add_circle_outline</v-icon>Add New Employee
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ modalTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-layout>
                  <v-flex>
                    <v-menu
                      v-model="menu"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      min-width="290px"
                    >
                      <v-text-field :value="formattedDate" slot="activator" label="Hire Date"></v-text-field>
                      <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
                    </v-menu>
                  </v-flex>
                  <!--  -->

                  <v-flex md4>
                    <v-select :items="status" label="Status" v-model="selectedItem.status"></v-select>
                  </v-flex>
                </v-layout>

                <v-layout>
                  <v-flex>
                    <v-text-field v-model="selectedItem.name" label="Name"></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      mask="###-###-####"
                      v-model="selectedItem.phoneNumber"
                      label="Phone Number"
                    ></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-select
                      :items="securityLevel"
                      v-model="selectedItem.securityLevel"
                      label="Security Level"
                    ></v-select>
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
                    <v-select
                      :items="position1"
                      v-model="selectedItem.position1"
                      label="Position 1"
                    ></v-select>
                  </v-flex>
                  <v-flex>
                    <v-select :items="wage1" v-model="selectedItem.wage1" label="Wage 1"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select
                      :items="position2"
                      v-model="selectedItem.position2"
                      label="Position 2"
                    ></v-select>
                  </v-flex>
                  <v-flex>
                    <v-select :items="wage2" v-model="selectedItem.wage2" label="Wage 2"></v-select>
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
            <v-spacer></v-spacer>

            <v-flex mb-3 text-xs-right>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save('local')">Save</v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :rowsPerPageItems="[5]"
      :headers="headers"
      :items="employees"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.name }}</td>
        <!-- <td class="text-xs-center">{{ props.item.status }}</td> -->
        <td class="text-xs-center">{{ props.item.securityLevel }}</td>
        <td class="text-xs-center">{{ props.item.position1 }}</td>
        <td class="text-xs-center">{{ props.item.wage1 }}</td>
        <!-- <td class="text-xs-center">{{ props.item.position2 }}</td>
        <td class="text-xs-center">{{ props.item.wage2 }}</td>-->
        <td class="text-xs-center"></td>
        <!-- <td class="text-xs-center">{{ props.item.address }}</td> -->
        <td class="text-xs-center">{{ props.item.email }}</td>
        <td class="justify-center layout px-0">
          <v-icon large class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon large @click="downward(props.item)">arrow_downward</v-icon>
        </td>
      </template>
      <!-- <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>-->
    </v-data-table>
  </div>
</template>

<script>
import { db, employees } from "@/fb";
import router from "@/router";
import AdminNavdrawer from "@/components/Navdrawer/AdminNavdrawer";
import format from "date-fns/format";

export default {
  name: "currentEmployees",
  components: { AdminNavdrawer },

  data: () => ({
    status: ["Active", "Inactive"],
    search: "",
    date: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    dialog: false,
    modal: false,
    menu1: false,
    menu2: false,

    securityLevel: [
      "GM",
      "Assistant Manager",
      "Night Manager",
      "Shift Leader",
      "Inshop",
      "Driver"
    ],
    position1: [
      "GM",
      "Assistant Manager",
      "Night Manager",
      "Shift Leader",
      "Inshop",
      "Driver"
    ],
    position2: [
      "None",
      "GM",
      "Assistant Manager",
      "Night Manager",
      "Shift Leader",
      "Inshop",
      "Driver"
    ],
    wage1: [
      "9.50",
      "10.50",
      "11.00",
      "11.50",
      "12.00",
      "14.00",
      "14.50",
      "Salary"
    ],
    wage2: ["None", "9.50", "10.50", "11.00", "11.50", "14.00", "14.50"],

    headers: [
      {
        text: "Name",
        align: "center",
        align: "center",
        sortable: false,
        value: "name"
      },
      // { text: "status", align: "center", value: "status" },
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
    employees: [],
    selectedIndex: -1,
    selectedItem: {
      id: -1,
      date: new Date().toISOString().substr(0, 10),

      name: "",
      status: "Active",
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
      date: new Date().toISOString().substr(0, 10),

      name: "",
      status: "Active",
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
    modalTitle() {
      return this.selectedIndex === -1
        ? "Add New Employee"
        : "Edit Current Employee Info";
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
    employees.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.employees.push({
          id: doc.id,
          date: this.date,

          name: doc.data().name,
          status: doc.data().status,
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
    this.$on("downward", item => {
      // this.deleteItem(item)
    });
  },

  methods: {
    initialize() {},

    editItem(item) {
      this.selectedIndex = this.employees.indexOf(item);
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
    },

    selectItem(item) {
      this.selectedIndex = this.employees.indexOf(item);
      this.selectedItem = Object.assign({}, item);
    },

    deleteItem(item, source) {
      const index = this.employees.indexOf(item);
      if (source != "parent") {
        if (confirm("Are you sure you want to delete this employee?")) {
          employees
            .doc(item.id)
            .delete()
            .then(() => {})
            .catch(error => {
              alert("Error occured while trying to delete the employee.");
              console.log(error);
            });
          this.employees.splice(index, 1);
        }
      } else {
        employees
          .doc(item.id)
          .delete()
          .then(() => {})
          .catch(error => {
            alert("Error occured while trying to delete the employee.");
            console.log(error);
          });
        this.employees.splice(index, 1);
      }
    },

    downward(item) {
      this.$emit("downward", item);
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
            "Are you sure you want to move this employee to 'Current Employees'?"
          )
        )
          return;
        else this.$emit("deletePast", this.selectedItem);
      }
      if (this.selectedIndex > -1) {
        Object.assign(this.employees[this.selectedIndex], this.selectedItem);
        employees
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
        this.employees.push(this.selectedItem);
        employees
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
    //     Object.assign(this.allEmployees[this.selectedIndex], this.selectedItem);
    //     allEmployees
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
    //     this.allEmployees.push(this.selectedItem);
    //     allEmployees
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
