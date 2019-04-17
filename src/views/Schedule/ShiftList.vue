<template>
  <v-container text-xs-center>
    <v-layout>
      <v-flex class="display-3">This Weeks Schedule</v-flex>
    </v-layout>
    <v-layout>
      <v-flex mb-2>
        <v-btn>Next Weeks Schedule</v-btn>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-data-table :headers="headers" :items="schedules" class="elevation-1" hide-actions>
        <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
        <template v-slot:items="props">
          <td>{{ props.item.time }}</td>
          <td class="text-xs-right">{{ props.item.shiftType }}</td>
          <td class="text-xs-right">{{ props.item.monday }}</td>
          <td class="text-xs-right">{{ props.item.tuesday }}</td>
          <td class="text-xs-right">{{ props.item.wednesday }}</td>
          <td class="text-xs-right">{{ props.item.thursday }}</td>
          <td class="text-xs-right">{{ props.item.friday }}</td>
          <td class="text-xs-right">{{ props.item.saturday }}</td>
          <td class="text-xs-right">{{ props.item.sunday }}</td>
          <td class="justify-center layout px-0">
            <v-icon small class="mr-2" @click="detailView(props.item)">more_horiz</v-icon>
          </td>
        </template>
      </v-data-table>
    </v-layout>
    <v-layout algin-center justify-center>
      <v-flex mt-2>
        <v-btn @click="add">Add New Shift</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { db, scheduleCollection } from "@/fb";
import router from "@/router";

export default {
  name: "shiftList",

  data() {
    return {
      schedules: [],
      headers: [
        { text: "Shift", align: "left", sortable: false, value: "time" },
        { text: "Shift Type", value: "shiftType" },
        { text: "Monday", sortable: false, value: "monday" },
        { text: "Tuesday", sortable: false, value: "tuesday" },
        { text: "Wednesday", sortable: false, value: "wednesday" },
        { text: "Thursday", sortable: false, value: "thursday" },
        { text: "Friday", sortable: false, value: "friday" },
        { text: "Saturday", sortable: false, value: "saturday" },
        { text: "Sunday", sortable: false, value: "sunday" },
        { text: "Actions", value: "id", sortable: false }
      ]
    };
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
  },

  methods: {
    detailView(schedule) {
      console.log("asd");
      console.log(schedule.id);
      router.push({
        name: "showShifts",
        params: { id: schedule.id }
      });
    },
    add() {
      router.push({
        name: "addShift"
      });
    }
  }
};
</script>

<style>
</style>
