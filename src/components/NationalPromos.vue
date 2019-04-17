<template>
  <v-container>
    <v-card>
      <v-flex text-xs-center>
        <v-dialog dark persistent v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-flex>
              <v-btn color="success" dark class="mb-2" v-on="on">
                National Promos
                <!-- <v-icon right>edit</v-icon> -->
              </v-btn>
            </v-flex>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ modalTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout>
                  <v-flex>
                    <v-text-field v-model="selectedItem.one" label="1"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-text-field v-model="selectedItem.two" label="2"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-text-field v-model="selectedItem.three" label="3"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-text-field v-model="selectedItem.four" label="4"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-text-field v-model="selectedItem.five" label="5"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-flex v-for="item in nationalPromos" :key="item">
          <h3 :key="item.id">{{ item.one }}</h3>
          <h3>{{ item.two }}</h3>
          <h3>{{ item.three }}</h3>
          <h3>{{ item.four }}</h3>
          <h3>{{ item.five }}</h3>
        </v-flex>
      </v-flex>
    </v-card>
    <v-data-table
      :rowsPerPageItems="[8]"
      :headers="headers"
      :items="nationalPromos"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.one }}</td>
        <td class="text-xs-left">{{ props.item.two }}</td>
        <td class="text-xs-left">{{ props.item.three }}</td>
        <td class="text-xs-left">{{ props.item.four }}</td>
        <td class="text-xs-left">{{ props.item.five }}</td>

        <td class="justify-center layout px-0">
          <v-icon medium class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>

    <!-- <AdminNavdrawer/> -->
  </v-container>
</template>

<script>
import { db, nationalPromos } from "@/fb";
import router from "@/router";
import AdminNavdrawer from "@/components/Navdrawer/AdminNavdrawer";

export default {
  name: "nationalPromos",
  components: { AdminNavdrawer },

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
      { text: "Actions", sortable: false, value: "actiosn" }
    ],
    nationalPromos: [],
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
      return this.selectedIndex === -1
        ? "Add National Promos"
        : "Edit National Promos";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    nationalPromos.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.nationalPromos.push({
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
      this.selectedIndex = this.nationalPromos.indexOf(item);
      this.selectedItem = Object.assign({}, item);
      this.dialog = true;
      console.log(this.selectedIndex);
      console.log(this.selectedItem.id);
    },

    deleteItem(item) {
      const index = this.nationalPromos.indexOf(item);
      if (confirm("Are you sure you want to delete this item?")) {
        this.nationalPromos.splice(index, 1);
        nationalPromos
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
          this.nationalPromos[this.selectedIndex],
          this.selectedItem
        );
        nationalPromos
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
        this.nationalPromos.push(this.selectedItem);
        nationalPromos
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
