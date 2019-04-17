<template>
  <!-- Pop Up Box -->
  <v-container>
    <!--  -->
    <!-- Pop Up Inside -->
    <v-card>
      <v-container>
        <v-layout pa-4>
          <v-flex>
            <v-form ref="form">
              <!--  -->
              <!-- Buttons -->
              <v-layout class="justify-center align-center">
                <router-link to="/">
                  <v-btn large color="error" @click="submit">Frontier</v-btn>
                </router-link>
              </v-layout>
              <!--  -->
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import db from "@/fb";
import format from "date-fns/format";
import sheetConfig from "@/sheetConfig";

export default {
  data() {
    return {
      duration: "Frontier",
      smoked: "$4.99",
      // date: new Date().toISOString().substr(0, 10),d
      date: "1",
      dialog: false,
      modal: false,
      menu: false
    };
  },
  methods: {
    /* Uploads new row into google sheet */
    submit() {
      /* This is raw data we'll be uploading */
      var row = ["=row()-1", this.date, this.duration, this.smoked];
      /* Initialize Google Client */
      this.$getGapiClient().then(gapi => {
        console.info(["Uploading", row]);
        /* Append method inserts row into sheet */
        gapi.client.sheets.spreadsheets.values
          .append({
            spreadsheetId:
              sheetConfig.spreadsheetId /* Id of our spreadsheet */,
            range: sheetConfig.smokingRange /* Sheet/range for insertion */,
            valueInputOption: "USER_ENTERED",
            majorDimension:
              "ROWS" /* Direction: Insert row (can be column as well)*/,
            values: [row] /* Our data - just one new row */
          })
          .then(
            response => {
              console.info("Upload successful");
            },
            response => {
              console.error("Upload failed", response);
            }
          );
      });
      if (this.$refs.form.validate()) {
        const smoked = {
          duration: this.duration,
          smoked: this.smoked,
          date: this.date
        };
        console.log(smoked);
        db.collection("smoking")
          .add(smoked)
          .then(() => {
            this.dialog = false;
          });
      }
    }
  },

  computed: {
    formattedDate() {
      return this.date ? format(this.date, "MMMM D,  YYYY") : "";
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>

