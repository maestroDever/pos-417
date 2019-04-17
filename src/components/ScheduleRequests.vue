<template>
  <!-- Pop Up Box -->
  <v-dialog persistent v-model="dialog" max-width="650px">
    <!--  -->
    <!-- Pop Up Button -->
    <v-btn slot="activator">
      Request Days Off
      <v-icon right>chevron_right</v-icon>
    </v-btn>
    <!--  -->
    <!-- Pop Up Inside -->
    <v-card>
      <v-container>
        <v-layout pa-4>
          <v-flex text-xs-center>
            <v-flex>
              <h1 class="white--text">Request Days Off</h1>
              <v-flex mb-4 mt-1></v-flex>
            </v-flex>
            <v-layout justify-center>
              <v-flex md8>
                <v-select :items="names" v-model="name" prepend-icon="comment" label="Name"></v-select>
              </v-flex>
            </v-layout>

            <!-- Date Picker 1 -->
            <v-flex mt-0 pa-0>
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                min-width="290px"
              >
                <v-text-field
                  :value="formattedDate1"
                  slot="activator"
                  label="Request Date"
                  prepend-icon="event"
                ></v-text-field>
                <v-date-picker v-model="startDate" @input="menu1 = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <!--  -->
            <v-flex mb-3>
              <h5>through</h5>
            </v-flex>
            <!-- Date Picker 2 -->
            <v-flex mt-0 pa-0>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                transition="scale-transition"
                min-width="290px"
              >
                <v-text-field
                  :value="formattedDate2"
                  slot="activator"
                  label="Request Date"
                  prepend-icon="event"
                ></v-text-field>
                <v-date-picker v-model="endDate" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <!--  -->
            <!--  -->
            <!-- Input Fields -->
            <v-text-field v-model="comments" prepend-icon="comment" label="Comments"></v-text-field>

            <!--  -->
            <!-- Buttons -->
            <v-layout class="justify-center align-center">
              <v-btn color="error" @click.native="dialog = false">Cancel</v-btn>
              <!-- <router-link to="/"> -->
              <v-btn large color="info" to="/schedule" @click="submit">Submit</v-btn>
              <!-- </router-link> -->
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { db, scheduleRequests } from "@/fb";
import format from "date-fns/format";

export default {
  data() {
    return {
      names: [
        "JC",
        "Will",
        "Elvis",
        "Rob",
        "Brandi",
        "Storey",
        "Juan",
        "David",
        "Sean",
        "Aleksei",
        "Nathan",
        "Amy",
        "Keegan"
      ],
      comments: "",
      dialog: false,
      modal: false,
      menu1: false,
      menu2: false,
      name: "",
      dateSubmitted: new Date().toISOString().substr(0, 10),
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {
    submit() {
      let time = Date.now();
      const scheduleRequests = {
        id: String(time),
        dateSubmitted: this.dateSubmitted,
        name: this.name,
        startDate: this.startDate,
        endDate: this.endDate,
        comments: this.comments
      };
      console.log(scheduleRequests);
      db.collection("scheduleRequests")
        .doc(scheduleRequests.id)
        .set(scheduleRequests)
        .then(() => {
          this.dialog = false;
        });
    }
    // Update Firebase Document
    // submit() {
    //   const scheduleRequests = {
    //     date1: this.date1,
    //     date2: this.date2,
    //     comments: this.comments
    //   };
    //   console.log(scheduleRequests);
    //   db.collection("scheduleRequests")
    //     .doc("1")
    //     .update(scheduleRequests)
    //     .then(() => {
    //       this.dialog = false;
    //     });
    // }
  },

  computed: {
    formattedDate1() {
      return this.startDate ? format(this.startDate, "MMMM D, YYYY") : "";
    },
    formattedDate2() {
      return this.endDate ? format(this.endDate, "MMMM D, YYYY") : "";
    }
  },

  updated() {
    if (this.endDate < this.startDate) this.endDate = this.startDate;
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>

