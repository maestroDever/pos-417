<template>
  <div>
    <v-toolbar height="75">
      <v-toolbar-title>Old Schedule Requests</v-toolbar-title>
      <v-divider color="white" class="mx-2" inset vertical></v-divider>
    </v-toolbar>
    <v-data-table
      :rowsPerPageItems="[5]"
      :headers="headers"
      :items="oldScheduleRequests"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.dateSubmitted }}</td>
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.startDate }}</td>
        <td class="text-xs-center">{{ props.item.endDate }}</td>
        <td class="text-xs-center">{{ props.item.comments }}</td>

        <td class="justify-center layout px-0">
          <!-- <v-icon large class="mr-2" @click="editItem(props.item)">edit</v-icon> -->
          <v-icon large @click="upward(props.item)">arrow_upward</v-icon>
          <v-icon medium right @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { db, oldScheduleRequests } from "@/fb";
import router from "@/router";
import AdminNavdrawer from "@/components/Navdrawer/AdminNavdrawer";
import format from "date-fns/format";

export default {
  name: "newScheduleRequests1",
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
      },
      {
        text: "Actions",
        align: "center",
        value: "comments"
      }
    ],
    oldScheduleRequests: [],
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
    modalTitle() {
      return this.selectedIndex === -1
        ? "Add New Employee"
        : "Edit Current Employee Info";
    },
    formattedDate() {
      return this.date ? format(this.date, "MMMM D,  YYYY") : "";
    }
  },

  created() {
    oldScheduleRequests.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.oldScheduleRequests.push({
          id: doc.id,
          dateSubmitted: this.dateSubmitted,
          name: doc.data().name,
          startDate: doc.data().startDate,
          endDate: doc.data().endDate,
          comments: doc.data().comments
        });
      });
    });
  },
  ready() {
    this.$on("upward", item => {
      // this.deleteItem(item)
    });
  },
  methods: {
    upward(item) {
      this.$emit("upward", item);
    },

    selectItem(item) {
      this.selectedIndex = this.oldScheduleRequests.indexOf(item);
      this.selectedItem = Object.assign({}, item);
    },

    deleteItem(item, source) {
      const index = this.oldScheduleRequests.indexOf(item);
      if (source != "parent") {
        if (confirm("Are you sure you want to delete this schedule request?")) {
          oldScheduleRequests
            .doc(item.id)
            .delete()
            .then(() => {})
            .catch(error => {
              alert(
                "Error occured while trying to delete the schedule request?"
              );
              console.log(error);
            });
          this.oldScheduleRequests.splice(index, 1);
        }
      } else {
        oldScheduleRequests
          .doc(item.id)
          .delete()
          .then(() => {})
          .catch(error => {
            alert("Error occured while trying to delete the schedule request?");
            console.log(error);
          });
        this.oldScheduleRequests.splice(index, 1);
      }
    },

    upward(item) {
      this.$emit("upward", item);
    },

    save(source) {
      if (source === "parent") {
        if (
          !confirm(
            "Are you sure you want to move this request to 'New Schedule Requests'?"
          )
        )
          return;
        else this.$emit("deleteCurrent", this.selectedItem);
      }
      if (this.selectedIndex > -1) {
        Object.assign(
          this.oldScheduleRequests[this.selectedIndex],
          this.selectedItem
        );
        oldScheduleRequests
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
        this.oldScheduleRequests.push(this.selectedItem);
        oldScheduleRequests
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
