<template>
  <v-container>
    <v-flex text-xs-center mb-3>
      <h1 class="display-3">Store Dashboard</h1>
    </v-flex>

    <v-layout>
      <NewsUpdates/>
    </v-layout>

    <v-layout>
      <DailyPromos/>
    </v-layout>

    <v-layout>
      <LocalPromos/>
    </v-layout>

    <v-layout>
      <NationalPromos/>
    </v-layout>

    <AdminNavdrawer/>
  </v-container>
</template>

<script>
import { db, newsUpdates } from "@/fb";
import router from "@/router";
import AdminNavdrawer from "@/components/Navdrawer/AdminNavdrawer";
import NewsUpdates from "@/components/NewsUpdates";
import DailyPromos from "@/components/DailyPromos";
import LocalPromos from "@/components/LocalPromos";
import NationalPromos from "@/components/NationalPromos";

export default {
  name: "storeDashboard",
  components: {
    AdminNavdrawer,
    NewsUpdates,
    DailyPromos,
    LocalPromos,
    NationalPromos
  },

  data: () => ({
    search: "",
    dialog: false,
    date: "4/1 - 4/7",
    headers: [
      { text: "One", align: "left", sortable: false, value: "one" },
      { text: "Two", sortable: false, value: "two" },
      { text: "Three", sortable: false, value: "three" },
      { text: "Four", sortable: false, value: "four" },
      { text: "Five", sortable: false, value: "five" },
      { text: "Edit", sortable: false, value: "edit" }
    ],
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

  computed: {
    modalTitle() {
      return this.selectedIndex === -1 ? "Edit New/Updates" : "Edit Customer";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    newsUpdates.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.storeDashboard.push({
          id: doc.id,
          one: doc.data().one,
          two: doc.data().two,
          three: doc.data().three
        });
      });
    });
  },

  methods: {
    initialize() {},

    editItem(item) {
      this.selectedIndex = this.storeDashboard.indexOf(item);
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
      console.log(this.selectedIndex);
      console.log(this.selectedItem.id);
    },

    deleteItem(item) {
      const index = this.storeDashboard.indexOf(item);
      if (confirm("Are you sure you want to delete this item?")) {
        this.storeDashboard.splice(index, 1);
        newsUpdates
          .doc(item.id)
          .delete()
          .then(() => {})
          .catch(error => {
            alert("Error occured while trying to delete the schedule.");
            console.log(error);
          });
      }
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.selectedItem = Object.assign({}, this.defaultItem);
        this.selectedIndex = -1;
      }, 300);
    },

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
</style>
