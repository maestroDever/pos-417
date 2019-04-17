<template>
  <v-container fluid>
    <v-layout column>
      <v-flex display-2>Edit Schedule</v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <router-link :to="{ name:'shiftList' }">
          <v-btn color="blue">Shift List</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
    <v-layout column class="subheading">
      <v-flex class="pt-2">
        Time:
        <b>{{this.schedule.time}}</b>
      </v-flex>
      <v-flex class="pt-2">
        Shift Type:
        <b>{{this.schedule.shiftType}}</b>
      </v-flex>
      <v-flex class="pt-2">
        Monday:
        <b>{{this.schedule.monday}}</b>
      </v-flex>
      <v-flex class="pt-2">
        Tuesday:
        <b>{{this.schedule.tuesday}}</b>
      </v-flex>
      <v-flex class="pt-2">
        Wednesday:
        <b>{{this.schedule.wednesday}}</b>
      </v-flex>
      <v-flex class="pt-2">
        Thursday:
        <b>{{this.schedule.thursday}}</b>
      </v-flex>
      <v-flex class="pt-2">
        Friday:
        <b>{{this.schedule.friday}}</b>
      </v-flex>
      <v-flex class="pt-2">
        Saturday:
        <b>{{this.schedule.saturday}}</b>
      </v-flex>
      <v-flex class="pt-2">
        Sunday:
        <b>{{this.schedule.Sunday}}</b>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout>
      <v-flex>
        <v-btn @click="editSchedule" color="green">Edit</v-btn>
        <v-btn @click="delSchedule" color="red">Delete</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { db, scheduleCollection } from "@/fb";
import router from "@/router";

export default {
  name: "editShifts",

  data() {
    return {
      id: this.$route.params.id,
      schedule: {}
    };
  },

  created() {
    const ref = scheduleCollection.doc(this.$route.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.id = doc.id;
        this.schedule = doc.data();
      } else {
        alert("No schedule was found");
      }
    });
  },

  methods: {
    editSchedule() {
      router.push({
        name: "editShifts",
        params: { id: this.id }
      });
    },
    delSchedule() {
      scheduleCollection
        .doc(this.id)
        .delete()
        .then(() => {
          router.push({ name: "shiftList" });
        })
        .catch(error => {
          alert("Error occured while trying to delete the schedule.");
          console.log(error);
        });
    }
  }
};
</script>
