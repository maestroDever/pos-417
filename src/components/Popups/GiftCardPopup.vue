<template>
  <div>
    <v-layout flat row justify-center>
      <v-btn round block color="info" large dark @click="dialog = true">Pay With Gift Card</v-btn>

      <v-dialog
        origin="center center"
        max-width="1000"
        v-model="dialog"
        transition="dialog-top-transition"
        persistent
      >
        <router-link to="/orderComplete">
          <v-card>
            <v-toolbar card dark color="primary">
              <v-toolbar-title>Pay With Gift Card</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark flat @click.native="dialog = false">Cancel</v-btn>
                <!-- <v-btn dark flat @click="submit">Save</v-btn> -->
              </v-toolbar-items>
            </v-toolbar>
            <v-container text-xs-center>
              <!-- Submits Order -->
              <v-layout>
                <v-flex text-xs-center>
                  <v-card>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                      aspect-ratio="2.75"
                    ></v-img>
                    <v-flex text-xs-center>
                      <div>
                        <h1 class="headline mb-0">Press Here After Running Gift Card To Finish Order</h1>
                      </div>
                    </v-flex>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </router-link>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
// import Navdrawer3 from "@/components/Navdrawer/Navdrawer3";

export default {
  data() {
    return {
      card_text:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui.",

      duration: "Tombstone",
      smoked: "$4.99",
      // date: new Date().toISOString().substr(0, 10),d
      date: "1",
      dialog: false,
      modal: false,
      menu: false
    };
  }
  // components: { Navdrawer3 }
};
</script>

<style>
.v-btn {
  text-decoration: none;
}
</style>