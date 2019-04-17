<template>
  <v-container>
    <v-alert
      v-model="submitSuccess"
      dismissible
      type="success"
      color="success"
    >New Schedule Added Successfully</v-alert>
    <v-layout align-center justify-center>
      <v-flex display-2>Add New Shift</v-flex>
    </v-layout>
    <v-spacer m-20></v-spacer>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submitForm">
      <v-layout align-center justify-center wrap class="mt-5">
        <!-- <v-flex xs12 md6 class="pr-5"> -->
        <!-- <v-time-picker
                    v-model="newSchedule.time"
                    :allowed-minutes="allowedStep"
                    landscape
                    class="mt-3"
                    format="24hr"
                    color="#033"
        ></v-time-picker>-->
        <!-- </v-flex> -->
        <v-flex xs12 md6>
          <v-text-field v-model="newSchedule.time" label="Time"></v-text-field>
          <v-text-field v-model="newSchedule.shiftType" label="Shift Type"></v-text-field>
          <v-text-field v-model="newSchedule.monday" label="Monday"></v-text-field>
          <v-text-field v-model="newSchedule.tuesday" label="Tuesday"></v-text-field>
          <v-text-field v-model="newSchedule.wednesday" label="Wednesday"></v-text-field>
          <v-text-field v-model="newSchedule.thursday" label="Thursday"></v-text-field>
          <v-text-field v-model="newSchedule.friday" label="Friday"></v-text-field>
          <v-text-field v-model="newSchedule.saturday" label="Saturday"></v-text-field>
          <v-text-field v-model="newSchedule.sunday" label="Sunday"></v-text-field>
        </v-flex>
        <v-flex>
          <v-btn @click="submitForm">Submit</v-btn>
          <v-btn @click="cancel">Cancel</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import { db, scheduleCollection } from "@/fb";
import router from "@/router";

export default {
  name: "addShift",
  data() {
    return {
      newSchedule: {
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
      valid: true,
      submitSuccess: false
    };
  },

  methods: {
    allowedHours: v => v % 2,
    allowedMinutes: v => v >= 10 && v <= 50,
    allowedStep: m => m % 10 === 0,

    submitForm() {
      scheduleCollection.add(this.newSchedule).then(doc => {
        this.newSchedule.time = "00:30";
        this.newSchedule.shiftType = "";
        this.newSchedule.monday = "";
        this.newSchedule.tuesday = "";
        this.newSchedule.wednesday = "";
        this.newSchedule.thursday = "";
        this.newSchedule.friday = "";
        this.newSchedule.saturday = "";
        this.newSchedule.sunday = "";
        this.submitSuccess = true;
        router.push({
          name: "shiftList"
        });
      });
    },

    cancel() {
      router.push({
        name: "shiftList"
      });
    }
  }
};
</script>

<style scoped>
</style>
