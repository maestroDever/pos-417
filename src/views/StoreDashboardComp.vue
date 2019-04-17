<template>
  <v-container>
    <h1 class="display-3">Store Dashboard</h1>

    <v-card>
      <v-container mt-3 mb-1>
        <v-layout>
          <v-flex text-xs-center>
            <!--  -->

            <!--  -->
            <v-btn class="success">
              <h3>News/Updates</h3>
            </v-btn>

            <!--  -->
            <h3>- Driver printer not working, has been redirected to front register printer.</h3>
            <h3>- Out of large cups, should be here by Tuesday.</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-card>
      <v-container>
        <v-layout>
          <v-flex text-xs-center>
            <!--  -->
            <v-btn class="error">
              <h3>Daily Promos</h3>
            </v-btn>
            <h3 class="dailyPromo">- French Bread Meatball Sub</h3>
            <h3>* Toasted bread with garlic powder and provolone, marinara, meatballs, choose of veggies, parmesan *</h3>
            <h3>$4.49/sm, $6.49/md, $8.49/lg, $10.49/xlg</h3>
            <!--  -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-card>
      <v-container mt-1 mb-1>
        <v-layout>
          <v-flex text-xs-center>
            <!--  -->
            <v-btn class="info">
              <h3>National Promos</h3>
            </v-btn>
            <h3>- 2 Medium Subs for $12.99</h3>
            <h3>- 2 Large Subs for $15.99</h3>
            <h3>- $2.00 of XL Sub</h3>

            <!--  -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-card>
      <v-container mb-1>
        <v-layout>
          <v-flex text-xs-center>
            <!--  -->
            <v-btn class="primary">
              <h3>Local Promos</h3>
            </v-btn>
            <h3>- 2 Cookies for $2.99</h3>
            <h3>- 1 Cookie and 1 Brownie for $3.39</h3>
            <h3>- 1 Side and 1 Regular Drink for $3.39</h3>
            <!--  -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
// import AdminNavdrawer from "@/components/Navdrawer/AdminNavdrawer";

export default {
  // components: { AdminNavdrawer }
};
</script>

<style>
h1 {
  text-align: center;
  text-decoration: underline;
  color: rgb(255, 255, 255);
}
.dailyPromo {
  color: rgb(179, 88, 88);
}
.dashboard {
  color: rgb(255, 255, 255);
}
</style>

