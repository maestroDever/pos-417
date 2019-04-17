<template>
  <div>
    <v-toolbar height="25">
      <v-flex text-xs-center>
        <router-link to="/thisweeksschedule">
          <h4>New Schedule Requests</h4>
        </router-link>
      </v-flex>
    </v-toolbar>
    <v-data-table
      :rowsPerPageItems="[3]"
      :headers="headers"
      :items="scheduleRequests"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.dateSubmitted }}</td>
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.startDate }}</td>
        <td class="text-xs-center">{{ props.item.endDate }}</td>
        <td class="text-xs-left">{{ props.item.comments }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { db, scheduleRequests } from "@/fb";
import router from "@/router";
import AdminNavdrawer from "@/components/Navdrawer/AdminNavdrawer";
import format from "date-fns/format";

export default {
  name: "newScheduleRequests",
  components: { AdminNavdrawer },

  data: () => ({
    status: ["Active", "Inactive"],
    search: "",
    date: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    dateSubmitted: new Date().toISOString().substr(0, 10),
    modal: false,
    menu1: false,
    menu2: false,

    headers: [
      {
        text: "Date Submitted",
        align: "center",
        align: "center",
        sortable: false,
        value: "dateSubmitted"
      },
      {
        text: "Name",
        align: "center",
        align: "center",
        sortable: false,
        value: "name"
      },

      {
        text: "Start Date",
        align: "center",
        value: "startDate"
      },
      {
        text: "End Date",
        align: "center",
        value: "endDate"
      },
      {
        text: "Comments",
        align: "center",
        value: "comments"
      }
    ],
    scheduleRequests: [],
    selectedIndex: -1,
    selectedItem: {
      id: -1,
      dateSubmitted: "",
      name: "",
      startDate: "",
      endDate: "",
      comments: ""
    },
    defaultItem: {
      id: 0,
      dateSubmitted: "",
      name: "",
      startDate: "",
      endDate: "",
      comments: ""
    }
  }),

  computed: {
    formattedDate() {
      return this.date ? format(this.date, "MMMM D,  YYYY") : "";
    }
  },

  created() {
    scheduleRequests.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.scheduleRequests.push({
          id: doc.id,
          dateSubmitted: this.dateSubmitted,
          name: doc.data().name,
          startDate: doc.data().startDate,
          endDate: doc.data().endDate,
          comments: doc.data().comments
        });
      });
    });
    this.$on("downward", item => {
      // this.deleteItem(item)
    });
  },

  methods: {
    selectItem(item) {
      this.selectedIndex = this.scheduleRequests.indexOf(item);
      this.selectedItem = Object.assign({}, item);
    },

    deleteItem(item, source) {
      const index = this.scheduleRequests.indexOf(item);
      if (source != "parent") {
        if (confirm("Are you sure you want to delete this schedule request?")) {
          scheduleRequests
            .doc(item.id)
            .delete()
            .then(() => {})
            .catch(error => {
              alert(
                "Error occured while trying to delete the schedule request."
              );
              console.log(error);
            });
          this.scheduleRequests.splice(index, 1);
        }
      } else {
        scheduleRequests
          .doc(item.id)
          .delete()
          .then(() => {})
          .catch(error => {
            alert("Error occured while trying to delete the schedule request.");
            console.log(error);
          });
        this.scheduleRequests.splice(index, 1);
      }
    },

    downward(item) {
      this.$emit("downward", item);
    },

    save(source) {
      if (source === "parent") {
        if (
          !confirm(
            "Are you sure you want to move this request to 'Old Schedule Requests'?"
          )
        )
          return;
        else this.$emit("deletePast", this.selectedItem);
      }
      if (this.selectedIndex > -1) {
        Object.assign(
          this.scheduleRequests[this.selectedIndex],
          this.selectedItem
        );
        scheduleRequests
          .doc(this.selectedItem.id)
          .set(this.selectedItem)
          .then(docRef => {})
          .catch(error => {
            alert("Error occured while updating the employee");
            console.log(error);
          });
      } else {
        const time = Date.now();
        this.selectedItem.id = String(time);
        this.scheduleRequests.push(this.selectedItem);
        scheduleRequests
          .doc(this.selectedItem.id)
          .set(this.selectedItem)
          .then(docRef => {})
          .catch(error => {
            alert("Error occured while adding new employee");
            console.log(error);
          });
      }
    }
    // save() {
    //   if (this.selectedIndex > -1) {
    //     Object.assign(this.allscheduleRequests[this.selectedIndex], this.selectedItem);
    //     allscheduleRequests
    //       .doc(this.selectedItem.id)
    //       .set(this.selectedItem)
    //       .then(docRef => {
    //         this.close();
    //       })
    //       .catch(error => {
    //         alert("Error occured while updating the employee");
    //         console.log(error);
    //       });
    //   } else {
    //     const time = Date.now();
    //     this.selectedItem.id = String(time);
    //     this.allscheduleRequests.push(this.selectedItem);
    //     allscheduleRequests
    //       .doc(this.selectedItem.id)
    //       .set(this.selectedItem)
    //       .then(docRef => {
    //         this.close;
    //       })
    //       .catch(error => {
    //         alert("Error occured while adding the new employee");
    //         console.log(error);
    //       });
    //   }
    //   this.close();
    // }

    // home() {
    //   router.push({
    //     name: "admin"
    //   });
    // }
  }
};
</script>

<style>
</style>
