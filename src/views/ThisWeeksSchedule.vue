<template>
  <v-container>
    <v-layout>
      <v-flex text-xs-center mb-3>
        <h1 class="display-1">Schedule Management</h1>
      </v-flex>
    </v-layout>

    <div>
      <v-toolbar height="95">
        <v-toolbar-title>This Weeks Schedule</v-toolbar-title>
        <v-divider color="white" class="mx-2" inset vertical></v-divider>

        <v-btn small class="error" @click="submit">
          <v-icon>chevron_left</v-icon>Submit Dates
        </v-btn>
        <!-- {{ date }} - {{ date2 }} -->
        <!-- <v-daterange v-model="range"></v-daterange> -->
        <!-- Date Picker 1 -->
        <v-flex ml-3 mt-2>
          <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            min-width="290px"
          >
            <v-text-field :value="formattedDate1" slot="activator" label="From"></v-text-field>
            <v-date-picker v-model="date1" @input="menu1 = false" first-day-of-week="1"></v-date-picker>
          </v-menu>
        </v-flex>

        <h3>-</h3>
        <v-flex></v-flex>
        <v-flex mt-2>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            transition="scale-transition"
            min-width="290px"
          >
            <v-text-field :value="formattedDate2" slot="activator" label="To"></v-text-field>
            <v-date-picker v-model="date2" @input="menu2 = false" first-day-of-week="1" readonly></v-date-picker>
          </v-menu>
        </v-flex>

        <!--  -->

        <v-dialog dark v-model="dialog" max-width="500px" persistent>
          <template v-slot:activator="{ on }">
            <v-flex mt-3>
              <v-btn color="success" dark v-on="on">
                <v-icon left dark>add_circle_outline</v-icon>Add New Shift
              </v-btn>
            </v-flex>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ modalTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md6>
                    <v-select :items="time" v-model="selectedItem.time" label="Shift Time"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="shiftType"
                      v-model="selectedItem.shiftType"
                      label="Shift Type"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select :items="monday" v-model="selectedItem.monday" label="Monday"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select :items="tuesday" v-model="selectedItem.tuesday" label="Tuesday"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select :items="wednesday" v-model="selectedItem.wednesday" label="Wednesday"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select :items="thursday" v-model="selectedItem.thursday" label="Thursday"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select :items="friday" v-model="selectedItem.friday" label="Friday"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select :items="saturday" v-model="selectedItem.saturday" label="Saturday"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-select :items="sunday" v-model="selectedItem.sunday" label="Sunday"></v-select>
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

      <v-toolbar flat height="40">
        <v-spacer></v-spacer>
        <v-layout justify-center>
          <!-- Search Bar -->

          <v-flex md8 mb-5 ml-5 mt-3>
            <v-text-field
              clearable
              v-model="search"
              prepend-icon="search"
              label="Search Employees"
              color="white"
              hide-details
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-flex mr-4 mb-3>
          <ScheduleRequests1/>
        </v-flex>
      </v-toolbar>
      <v-data-table
        :rowsPerPageItems="[8]"
        :headers="headers"
        :items="schedules"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.time }}</td>
          <td class="text-xs-left">{{ props.item.shiftType }}</td>
          <td class="text-xs-left">{{ props.item.monday }}</td>
          <td class="text-xs-left">{{ props.item.tuesday }}</td>
          <td class="text-xs-left">{{ props.item.wednesday }}</td>
          <td class="text-xs-left">{{ props.item.thursday }}</td>
          <td class="text-xs-left">{{ props.item.friday }}</td>
          <td class="text-xs-left">{{ props.item.saturday }}</td>
          <td class="text-xs-left">{{ props.item.sunday }}</td>
          <td class="justify-center layout px-0">
            <v-icon medium class="mr-2" @click="editItem(props.item)">edit</v-icon>
            <v-icon small right @click="deleteItem(props.item)">delete</v-icon>
          </td>
        </template>
      </v-data-table>
      <v-flex text-xs-center mt-2>
        <v-btn large to="nextweeksschedule">
          Next Weeks Schedule
          <v-icon right>arrow_forward</v-icon>
        </v-btn>
      </v-flex>
    </div>

    <AdminNavdrawer/>
  </v-container>
</template>

<script>
import { db, thisWeeksScheduleDates, scheduleCollection } from "@/fb";
import router from "@/router";
import AdminNavdrawer from "@/components/Navdrawer/AdminNavdrawer";
import format from "date-fns/format";
import ScheduleRequests1 from "@/components/ScheduleRequests1";

export default {
  name: "thisWeeksSchedule",
  components: { AdminNavdrawer, ScheduleRequests1 },

  data: () => ({
    search: "",
    date1: "",
    date2: "",
    // range: {},
    dialog: false,
    modal: false,
    menu1: false,
    menu2: false,
    time: [
      "7:30AM - 5:30PM",
      "10:00AM - 5:30PM",
      "11:00AM - 2:00PM",
      "5:30PM - 3:30AM",
      "5:30PM - 8:00PM",
      "5:30PM - 12:00AM",
      "7:00AM - 2:00PM",
      "2:00PM - 6:00PM",
      "7:00AM - 2:00PM",
      "10:00AM - 3:00PM",
      "6:00PM - 3:30AM",
      "2:00PM - 7:00PM",
      "7:00PM - 3:30AM"
    ],
    shiftType: ["Manager", "Inshop", "Driver"],
    monday: [
      "JC",
      "Will",
      "Elvis",
      "Rob",
      "Brandi",
      "Storey",
      "David",
      "Juan",
      "Aleksei",
      "Sean",
      "Amy",
      "Nathan",
      "Keegan",
      "NEED"
    ],
    tuesday: [
      "JC",
      "Will",
      "Elvis",
      "Rob",
      "Brandi",
      "Storey",
      "David",
      "Juan",
      "Aleksei",
      "Sean",
      "Amy",
      "Nathan",
      "Keegan",
      "NEED"
    ],
    wednesday: [
      "JC",
      "Will",
      "Elvis",
      "Rob",
      "Brandi",
      "Storey",
      "David",
      "Juan",
      "Aleksei",
      "Sean",
      "Amy",
      "Nathan",
      "Keegan",
      "NEED"
    ],
    thursday: [
      "JC",
      "Will",
      "Elvis",
      "Rob",
      "Brandi",
      "Storey",
      "David",
      "Juan",
      "Aleksei",
      "Sean",
      "Amy",
      "Nathan",
      "Keegan",
      "NEED"
    ],
    friday: [
      "JC",
      "Will",
      "Elvis",
      "Rob",
      "Brandi",
      "Storey",
      "David",
      "Juan",
      "Aleksei",
      "Sean",
      "Amy",
      "Nathan",
      "Keegan",
      "NEED"
    ],
    saturday: [
      "JC",
      "Will",
      "Elvis",
      "Rob",
      "Brandi",
      "Storey",
      "David",
      "Juan",
      "Aleksei",
      "Sean",
      "Amy",
      "Nathan",
      "Keegan",
      "NEED"
    ],
    sunday: [
      "JC",
      "Will",
      "Elvis",
      "Rob",
      "Brandi",
      "Storey",
      "David",
      "Juan",
      "Aleksei",
      "Sean",
      "Amy",
      "Nathan",
      "Keegan",
      "NEED"
    ],

    headers: [
      { text: "Shift Time", align: "left", value: "time" },
      { text: "Shift Type", value: "shiftType" },
      { text: "Monday", sortable: false, value: "monday" },
      { text: "Tuesday", sortable: false, value: "tuesday" },
      { text: "Wednesday", sortable: false, value: "wednesday" },
      { text: "Thursday", sortable: false, value: "thursday" },
      { text: "Friday", sortable: false, value: "friday" },
      { text: "Saturday", sortable: false, value: "saturday" },
      { text: "Sunday", sortable: false, value: "sunday" },
      { text: "Actions", align: "center", value: "id", sortable: false }
    ],
    schedules: [],
    selectedIndex: -1,
    selectedItem: {
      id: -1,
      time: "",
      shiftType: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: ""
    },
    defaultItem: {
      id: 0,
      time: "",
      shiftType: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: ""
    }
  }),

  computed: {
    modalTitle() {
      return this.selectedIndex === -1 ? "Add New Shift" : "Edit Shift";
    },
    formattedDate1() {
      return this.date1 ? format(this.date1, "MMMM D, YYYY") : "";
    },
    formattedDate2() {
      return this.date2 ? format(this.date2, "MMMM D, YYYY") : "";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    scheduleCollection.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.schedules.push({
          id: doc.id,
          time: doc.data().time,
          shiftType: doc.data().shiftType,
          monday: doc.data().monday,
          tuesday: doc.data().tuesday,
          wednesday: doc.data().wednesday,
          thursday: doc.data().thursday,
          friday: doc.data().friday,
          saturday: doc.data().saturday,
          sunday: doc.data().sunday
        });
      });
    });
    this.date1 = this.$moment()
      .startOf("week")
      .format("YYYY-MM-DD");
    this.date2 = this.$moment()
      .endOf("week")
      .format("YYYY-MM-DD");
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
        scheduleCollection
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
      setTimeout(() => {
        this.selectedItem = Object.assign({}, this.defaultItem);
        this.selectedIndex = -1;
      }, 300);
    },

    save() {
      if (this.selectedIndex > -1) {
        Object.assign(this.schedules[this.selectedIndex], this.selectedItem);
        scheduleCollection
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
        this.schedules.push(this.selectedItem);
        scheduleCollection
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
    },
    submit() {
      thisWeeksScheduleDates
        .doc("thisWeeksSchedule")
        .set({
          date1: this.date1,
          date2: this.date2
        })
        .then(docRef => {
          alert("Date saved successfully");
        })
        .catch(error => {
          alert("Error occured while saving dates");
          console.log(error);
        });
    }
  },

  updated() {
    if (this.$moment(this.date1).day() !== 1) {
      this.date1 = this.$moment(this.date1).startOf("week");
      this.date2 = this.$moment(this.date1).endOf("week");
    }
    // if(this.date2 < this.date1)
    //   this.date2 = this.date1
  }
};
</script>

<style>
.display-1 {
  text-decoration: underline;
  color: white;
}
</style>