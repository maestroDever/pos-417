<template>
  <v-container fluid>
    <v-flex text-xs-center mb-3>
      <h1 class="display-3">Customer Profile</h1>
      <h2>CustomerID: {{ this.customerID }}</h2>
    </v-flex>
    <!-- <CustomerInfo :customerID="customerID" /> -->
    <CustomerInfoWithDialog :customerID="customerID"/>

    <Navdrawer2/>
  </v-container>
</template>

<script>
import Navdrawer2 from "@/components/Navdrawer/Navdrawer2";
import { db } from "@/fb";
import CustomerInfo from "@/components/CustomerInfo";
import CustomerInfoWithDialog from "@/components/CustomerInfoWithDialog";

export default {
  props: ["customerID"],
  data() {
    return {};
  },
  components: {
    Navdrawer2,
    CustomerInfo,
    CustomerInfoWithDialog
  },
  methods: {}
};
</script>

<style>
a {
  text-decoration: none;
}
.centered-input input {
  text-align: center;
}
.display-3 {
  text-decoration: underline;
}
</style>
