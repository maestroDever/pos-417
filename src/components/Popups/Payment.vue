<template>
  <div>
    <v-layout flat row justify-center>
      <v-btn fixed round block color="success" large dark @click="dialog = true">
        <h1>Finish Order</h1>
      </v-btn>

      <v-dialog
        origin="center center"
        max-width="1000"
        v-model="dialog"
        transition="dialog-top-transition"
        persistent
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-toolbar-title>Payment</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click.native="dialog = false">Cancel</v-btn>
              <!-- <v-btn dark flat @click="submit">Save</v-btn> -->
            </v-toolbar-items>
          </v-toolbar>
          <v-container>
            <v-container wrap grid-list-md>
              <v-layout pa-5 flat row justify-center>
                <v-flex>
                  <CashPopup/>
                </v-flex>
              </v-layout>
            </v-container>

            <v-container wrap grid-list-md>
              <v-layout pa-5 flat row justify-center>
                <v-flex>
                  <CreditPopup/>
                </v-flex>
              </v-layout>
            </v-container>

            <v-container wrap grid-list-md>
              <v-layout pa-5 flat row justify-center>
                <v-flex>
                  <GiftCardPopup/>
                </v-flex>
              </v-layout>
            </v-container>
            <!-- <Navdrawer1/> -->
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import CashPopup from "@/components/Popups/CashPopup";
import CreditPopup from "@/components/Popups/CreditPopup";
import GiftCardPopup from "@/components/Popups/GiftCardPopup";
// import Navdrawer1 from "@/components/Navdrawer/Navdrawer1";

export default {
  data() {
    return {
      duration: "Tombstone",
      smoked: "$4.99",
      // date: new Date().toISOString().substr(0, 10),d
      date: "1",
      dialog: false,
      modal: false,
      menu: false
    };
  },
  components: { CashPopup, CreditPopup, GiftCardPopup }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
