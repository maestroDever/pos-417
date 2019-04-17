<template>
  <div>
    <v-flex mb-5 text-xs-center>
      <h1 class="display-3">Employee Management</h1>
    </v-flex>
    <v-flex mb-2>
      <CurrentEmployees @downward="downward" @deletePast="deletePast" ref="current"/>
    </v-flex>
    <v-flex>
      <PastEmployees @upward="upward" @deleteCurrent="deleteCurrent" ref="past"/>
    </v-flex>
    <AdminNavdrawer/>
  </div>
</template>

<script>
import { db, allEmployees } from "@/fb";
import router from "@/router";
import AdminNavdrawer from "@/components/Navdrawer/AdminNavdrawer";
import CurrentEmployees from "@/components/CurrentEmployees";
import PastEmployees from "@/components/PastEmployees";

export default {
  name: "employeeManagement",
  components: { AdminNavdrawer, CurrentEmployees, PastEmployees },

  methods: {
    downward(item) {
      this.$refs.past.selectItem(item);
      this.$refs.past.save("parent");
    },

    upward(item) {
      this.$refs.current.selectItem(item);
      this.$refs.current.save("parent");
    },

    deleteCurrent(item) {
      this.$refs.current.deleteItem(item, "parent");
    },

    deletePast(item) {
      this.$refs.past.deleteItem(item, "parent");
    }
  }
};
</script>

<style>
.display-3 {
  text-decoration: underline;
}
</style>
