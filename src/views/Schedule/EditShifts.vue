<template>
  <v-container>
    <v-alert
      v-model="updateSuccess"
      dismissible
      type="success"
      color="success"
    >New Schedule Added Successfully</v-alert>
    <v-layout align-center justify-center>
      <v-flex display-2>Edit Shift</v-flex>
    </v-layout>
    <v-spacer m-20></v-spacer>
    <v-form ref="form" @submit.prevent="submitForm">
      <v-layout align-center justify-center wrap class="mt-5">
        <v-flex xs12 md6 class="pr-5">
          <v-text-field v-model="schedule.time" label="Time"></v-text-field>
          <v-time-picker
            v-model="schedule.time"
            :allowed-minutes="allowedStep"
            landscape
            class="mt-3"
            format="24hr"
            color="#033"
          ></v-time-picker>
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field v-model="schedule.shiftType" label="Shift Type"></v-text-field>
          <v-text-field v-model="schedule.monday" label="Monday"></v-text-field>
          <v-text-field v-model="schedule.tuesday" label="Tuesday"></v-text-field>
          <v-text-field v-model="schedule.wednesday" label="Wednesday"></v-text-field>
          <v-text-field v-model="schedule.thursday" label="Thursday"></v-text-field>
          <v-text-field v-model="schedule.friday" label="Friday"></v-text-field>
          <v-text-field v-model="schedule.saturday" label="Saturday"></v-text-field>
          <v-text-field v-model="schedule.sunday" label="Sunday"></v-text-field>
        </v-flex>
        <v-flex>
          <v-btn @click="submitForm" color="green">Update</v-btn>
          <v-btn @click="cancel" color="red">Cancel</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
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
      schedule: {},
      updateSuccess: false
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
    allowedHours: v => v % 2,
    allowedMinutes: v => v >= 10 && v <= 50,
    allowedStep: m => m % 10 === 0,

    cancel() {
      router.push({ name: "showShifts" });
    },

    submitForm() {
      scheduleCollection
        .doc(this.id)
        .set(this.schedule)
        .then(docRef => {
          this.updateSuccess = true;
          this.id = "";
          this.schedule.time = "";
          this.schedule.shiftType = "";
          this.schedule.monday = "";
          this.schedule.tuesday = "";
          this.schedule.wednesday = "";
          this.schedule.thursday = "";
          this.schedule.friday = "";
          this.schedule.saturday = "";
          this.schedule.sunday = "";
          router.push({
            name: "shiftList",
            params: this.$route.params.id
          });
        })
        .catch(error => {
          alert("Error occured while updating the schedule");
          console.log(error);
        });
    }
  }
};
</script>
