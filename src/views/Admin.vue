<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex text-xs-center>
        <v-btn class="primary" to="/">
          <v-icon left>compare_arrows</v-icon>Switch Shifts
          <v-icon right>compare_arrows</v-icon>
        </v-btn>
      </v-flex>
      <v-flex text-xs-center>
        <h1 class="display-2">Daily Operations</h1>
      </v-flex>
      <v-flex text-xs-center>
        <v-btn class="error" to="/">
          <v-icon left>cancel</v-icon>Log Out of System
          <v-icon right>cancel</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>

    <!-- <v-flex text-xs-center>
      <v-btn class="error" to="/">
        <v-icon left>cancel</v-icon>Log Out of System
        <v-icon right>cancel</v-icon>
      </v-btn>
    </v-flex>
    <v-container>
      <v-flex>
        <v-container grid-list-xl>
          <v-layout justify-center>
            <v-flex>
              <CheckScheduleRequests/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-container>-->
    <draggable @start="dragging = true" @end="dragging = false">
      <v-layout justify-center>
        <v-flex>
          <v-carousel hide-controls height="300">
            <v-flex text-xs-center>
              <h3>Hourly Breakdown</h3>
            </v-flex>
            <v-carousel-item>
              <v-card></v-card>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex md6>
          <v-carousel hide-controls height="300">
            <v-flex text-xs-center>
              <h3>Todays Labor</h3>
            </v-flex>
            <v-carousel-item>
              <v-card></v-card>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex md6>
          <v-carousel hide-controls height="300">
            <v-flex text-xs-center>
              <h3>Todays Sales</h3>
            </v-flex>
            <v-carousel-item>
              <v-card></v-card>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex md6>
          <v-carousel hide-controls height="300">
            <v-flex text-xs-center>
              <h3>Expected Deposit Amount</h3>
            </v-flex>
            <v-carousel-item>
              <v-card></v-card>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>

      <v-layout justify-center>
        <v-flex md4>
          <v-carousel hide-controls height="300">
            <v-flex text-xs-center>
              <h3>Todays Deposits</h3>
            </v-flex>
            <v-carousel-item>
              <v-card></v-card>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex>
          <v-carousel hide-controls height="325">
            <v-carousel-item>
              <CheckScheduleDashboard/>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </draggable>

    <AdminNavdrawer/>
  </v-container>
</template>

<script>
import AdminNavdrawer from "@/components/Navdrawer/AdminNavdrawer";
import CheckScheduleDashboard from "@/components/CheckScheduleDashboard";
import draggable from "vuedraggable";

export default {
  drawer: true,
  components: { AdminNavdrawer, CheckScheduleDashboard, draggable }
};
</script>


<style >
a {
  text-decoration: none;
}

h1 {
  text-decoration: underline;
}
.display-3 {
  color: white;
}
</style>
