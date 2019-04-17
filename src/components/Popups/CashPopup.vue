<template>
  <div>
    <v-layout flat row justify-center>
      <v-btn round block color="success" large dark @click="dialog = true">Pay With Cash</v-btn>

      <v-dialog
        origin="center center"
        max-width="1000"
        v-model="dialog"
        transition="dialog-top-transition"
        persistent
        fullscreen
      >
        <v-card>
          <v-toolbar card dark color="primary">
            <v-toolbar-title>Pay With Cash</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click.native="dialog = false">Cancel</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-container>
            <v-btn>$1.00</v-btn>
            <v-btn>$5.00</v-btn>
            <v-btn>$10.00</v-btn>
            <v-btn @click="submit">$20.00</v-btn>
            <v-btn>$100.00</v-btn>
            <v-btn>Enter Dollar Amount</v-btn>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
// import Navdrawer3 from "@/components/Navdrawer/Navdrawer3";

export default {
  data: () => ({
    search: "",
    dialog: false,

    storeDashboard: [],
    selectedIndex: -1,
    selectedItem: {
      id: -1,
      one: "",
      two: "",
      three: "",
      four: "",
      five: ""
    },
    defaultItem: {
      id: 0,
      one: "",
      two: "",
      three: "",
      four: "",
      five: ""
    }
  }),

  methods: {
    save() {
      if (this.selectedIndex > -1) {
        Object.assign(
          this.storeDashboard[this.selectedIndex],
          this.selectedItem
        );
        newsUpdates
          .doc(this.selectedItem.id)
          .set(this.selectedItem)
          .then(docRef => {
            this.close();
          })
          .catch(error => {
            alert("Error occured while updating the schedule");
            console.log(error);
          });
      } else {
        const name = Date.now();
        this.selectedItem.id = String(name);
        this.storeDashboard.push(this.selectedItem);
        newsUpdates
          .doc(this.selectedItem.id)
          .set(this.selectedItem)
          .then(docRef => {
            this.close;
          })
          .catch(error => {
            alert("Error occured while adding into schedule");
            console.log(error);
          });
      }
      this.close();
    }

    // home() {
    //   router.push({
    //     name: "admin"
    //   });
    // }
  }
};
</script>

<style>
.display-3 {
  text-decoration: underline;
  color: rgb(255, 255, 255);
}

.highlight {
  color: rgb(196, 67, 67);
}
</style>
