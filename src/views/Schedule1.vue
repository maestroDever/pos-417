<template>
  <v-flex>
    <v-flex mb-4 text-xs-center>
      <h1 class="display-3">Next Weeks Schedule</h1>
    </v-flex>
    <!-- <v-flex text-xs-center mt-2 mb-2>
      <h1>Schedule Updates</h1>
      <h2>{{ scheduleUpdates }}</h2>
    </v-flex>-->
    <div>
      <v-toolbar color="rgb(20, 78, 20)">
        <v-toolbar-title>Next Weeks Schedule</v-toolbar-title>
        <v-divider color="white" class="mx-2" inset vertical></v-divider>

        <v-flex v-for="item in dates" :key="item.id">
          <h4 :key="item.id">{{item.date1}}</h4>
          <h5>through</h5>
          <h4 :key="item.id">{{item.date2}}</h4>
        </v-flex>
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
        <ScheduleRequests/>
        <!--  -->
        <!--  -->

        <!--  -->
        <!--  -->
        <!--  -->
      </v-toolbar>
      <v-data-table
        :rowsPerPageItems="[8]"
        :headers="headers"
        :items="schedule"
        :search="search"
        class="elevation-5"
      >
        <template v-slot:items="props">
          <td>{{ props.item.time }}</td>
          <td>
            <h5 class="shiftType">{{ props.item.shiftType }}</h5>
          </td>
          <td>{{ props.item.monday }}</td>
          <td>{{ props.item.tuesday }}</td>
          <td>{{ props.item.wednesday }}</td>
          <td>{{ props.item.thursday }}</td>
          <td>{{ props.item.friday }}</td>
          <td>{{ props.item.saturday }}</td>
          <td>{{ props.item.sunday }}</td>
          <!-- <td class="justify-center layout px-0">
            <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
            <v-icon small @click="deleteItem(props.item)">delete</v-icon>
          </td>-->
        </template>
        <!-- <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>-->
      </v-data-table>
      <v-flex text-xs-center mt-2>
        <v-btn large to="/schedule">
          See This Weeks Schedule
          <v-icon right>arrow_back</v-icon>
        </v-btn>
      </v-flex>
    </div>
    <Navdrawer/>
  </v-flex>
</template>

<script>
import Navdrawer from "@/components/Navdrawer/Navdrawer";
import { db, nextWeeksScheduleDates } from "@/fb";
import ScheduleRequests from "@/components/ScheduleRequests";

export default {
  components: { Navdrawer, ScheduleRequests },
  data: () => ({
    dates: [],
    thisWeek: true,
    dialog: false,
    search: "",
    scheduleUpdates: "*** None ***",
    headers: [
      {
        text: "Shift",

        sortable: true,
        value: "time"
      },
      {
        text: "Shift Type",
        sortable: true,
        value: "shiftType"
      },
      { text: "Monday", sortable: false, value: "monday" },
      { text: "Tuesday", sortable: false, value: "tuesday" },
      { text: "Wednesday", sortable: false, value: "wednesday" },
      { text: "Thursday", sortable: false, value: "thursday" },
      { text: "Friday", sortable: false, value: "friday" },
      { text: "Saturday", sortable: false, value: "saturday" },
      { text: "Sunday", sortable: false, value: "sunday" }
      // { text: "Actions", sortable: false, value: "actions" }
    ],
    schedule: [],
    editedIndex: -1,
    editedItem: {
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
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
    db.collection("schedule2").onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === "added") {
          this.schedule.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
    db.collection("nextWeeksScheduleDates")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.dates.push({
            date1: doc.data().date1,
            date2: doc.data().date2
          });
        });
      });
  },

  methods: {
    initialize() {
      this.schedule = [];
    },

    editItem(item) {
      this.editedIndex = this.schedule.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.schedule.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.schedule.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.schedule[this.editedIndex], this.editedItem);
      } else {
        this.schedule.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
  text-decoration: underline;
  color: rgb(175, 175, 175);
}
.dailyPromo {
  color: rgb(179, 88, 88);
}
.dashboard {
  color: rgb(36, 189, 44);
}
.days {
  text-decoration: underline;
}
.centered-input input {
  text-align: center;
}
.shiftType {
  color: rgb(211, 75, 75);
}
</style>


