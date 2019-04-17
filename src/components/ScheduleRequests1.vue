<template>
  <!-- Pop Up Box -->
  <v-dialog v-model="dialog" max-width="950px">
    <!--  -->
    <!-- Pop Up Button -->
    <v-btn small class="info" slot="activator">
      Check Schedule Requests
      <v-icon right>chevron_right</v-icon>
    </v-btn>
    <!--  -->
    <!-- Pop Up Inside -->
    <v-card>
      <div>
        <v-flex mb-2>
          <CheckScheduleRequests @downward="downward" @deletePast="deletePast" ref="current"/>
        </v-flex>
        <v-flex>
          <CheckScheduleRequests1 @upward="upward" @deleteCurrent="deleteCurrent" ref="past"/>
        </v-flex>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { db, scheduleRequests } from "@/fb";
import router from "@/router";

import CheckScheduleRequests from "@/components/CheckScheduleRequests";
import CheckScheduleRequests1 from "@/components/CheckScheduleRequests1";

export default {
  name: "employeeManagement",
  components: { CheckScheduleRequests, CheckScheduleRequests1 },
  data() {
    return {
      dialog: false
    };
  },
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
a {
  text-decoration: none;
}
</style>

