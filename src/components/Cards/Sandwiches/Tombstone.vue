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
                  <v-btn large color="info" @click="submit">Tombstone</v-btn>
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
      item: "Tombstone",
      price: "$4.99",
      // date: new Date().toISOString().substr(0, 10),d
      quantity: "1",
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
              console.info("Sheets Upload Successful");
            },
            response => {
              console.error("Upload failed", response);
            }
          );
      });
      if (this.$refs.form.validate()) {
        const newOrder = {
          item: this.item,
          price: this.price,
          quantity: this.quantity
        };
        console.log(newOrder);
        db.collection("newOrder")
          .add(newOrder)
          .then(function(docRef) {
            // this.dialog = false;
            console.info("Firebase Upload Successful", docRef.id);
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

