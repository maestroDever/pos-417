<template>
  <div id="app">
    <v-layout mt-3>
      <v-flex text-xs-center mb-3>
        <h1 class="display-3">Order Management</h1>
      </v-flex>
    </v-layout>

    <v-flex mb-4>
      <CurrentOrders/>
    </v-flex>
    <v-flex>
      <PastOrders/>
    </v-flex>

    <AdminNavdrawer/>
  </div>
</template>

<script>
import { db, currentOrders } from "@/fb";
import router from "@/router";
import AdminNavdrawer from "@/components/Navdrawer/AdminNavdrawer";
import CurrentOrders from "@/components/CurrentOrders";
import PastOrders from "@/components/PastOrders";

export default {
  name: "orderManagement",
  components: { AdminNavdrawer, CurrentOrders, PastOrders },

  data: () => ({
    search: "",
    dialog: false,
    date: "4/1 - 4/7",
    headers: [
      { text: "Order Number", value: "orderNumber" },
      { text: "Order Time", value: "orderTime" },
      {
        text: "Order Type",
        align: "left",
        value: "orderType"
      },

      { text: "Order Total", value: "orderTotal" },

      { text: "Time Elapsed", value: "timeElapsed" },
      { text: "Customer Name", sortable: false, value: "customerName" },
      { text: "Customer Address", sortable: false, value: "customerAddress" },
      // { text: "Customer Notes", sortable: false, value: "customerNotes" },
      // { text: "Internal Notes", sortable: false, value: "internalNotes" },
      { text: "Edit Order", align: "center", value: "id", sortable: false }
    ],
    currentOrders: [],
    selectedIndex: -1,
    selectedItem: {
      id: -1,
      orderNumber: "",
      orderTime: "",
      orderType: "",
      orderTotal: "",
      timeElapsed: "",
      customerName: "",
      customerAddress: ""
    },
    defaultItem: {
      id: 0,
      orderNumber: "",
      orderTime: "",
      orderType: "",
      orderTotal: "",
      timeElapsed: "",
      customerName: "",
      customerAddress: ""
    }
  }),

  computed: {
    modalTitle() {
      return this.selectedIndex === -1 ? "Add New Order" : "Edit Order";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    currentOrders.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.currentOrders.push({
          id: doc.id,
          orderNumber: doc.data().orderNumber,
          orderTime: doc.data().orderTime,
          orderType: doc.data().orderType,
          orderTotal: doc.data().orderTotal,
          timeElapsed: doc.data().timeElapsed,
          customerName: doc.data().customerName,
          customerAddress: doc.data().customerAddress
        });
      });
    });
  },

  methods: {
    initialize() {},

    editItem(item) {
      this.selectedIndex = this.currentOrders.indexOf(item);
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
      console.log(this.selectedIndex);
      console.log(this.selectedItem.id);
    },

    deleteItem(item) {
      const index = this.currentOrders.indexOf(item);
      if (confirm("Are you sure you want to delete this item?")) {
        this.currentOrders.splice(index, 1);
        currentOrders
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
      setnameout(() => {
        this.selectedItem = Object.assign({}, this.defaultItem);
        this.selectedIndex = -1;
      }, 300);
    },

    save() {
      if (this.selectedIndex > -1) {
        Object.assign(
          this.currentOrders[this.selectedIndex],
          this.selectedItem
        );
        currentOrders
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
        this.currentOrders.push(this.selectedItem);
        currentOrders
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
  color: white;
}
</style>
