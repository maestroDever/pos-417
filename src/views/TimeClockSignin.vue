<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-layout mt-3>
        <v-flex text-xs-center mb-2>
          <h1 class="display-3">Time Clock Sign In</h1>
        </v-flex>
      </v-layout>

      <v-card>
        <v-flex pa-5 ma-5>
          <!-- Input Fields -->
          <v-text-field v-model="username" prepend-icon="access_time" label="Username"></v-text-field>

          <v-text-field
            :type="show1 ? 'text' : 'password'"
            v-model="password"
            prepend-icon="access_time"
            label="Password"
          ></v-text-field>
          <!--  -->
          <!-- Buttons -->
          <v-layout class="justify-center align-center">
            <router-link to="/mainmenu">
              <v-btn color="error">Cancel</v-btn>
            </router-link>

            <v-btn large color="info" @click="login">Submit</v-btn>
          </v-layout>
          <!--  -->
        </v-flex>
      </v-card>

      <!-- <v-flex text-xs-center mt-3>
        <h1 class="announcment">***Don't forget to offer a cookie or brownie!!!***</h1>
      </v-flex>-->
    </v-flex>
    <Navdrawer/>
  </v-layout>
</template>

<script>
import Navdrawer from "@/components/Navdrawer/Navdrawer";
import firebase from "firebase";
import { db } from "@/fb";
import router from "@/router";

export default {
  name: "login",
  components: { Navdrawer },
  data: function() {
    return {
      show1: false,
      password: "Password",
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(user => {
          this.$router.replace("/timeclock");
          console.log("Login Successful");
        })
        .catch(err => {
          alert(err.message);
          console.log("Error Logging In");
        });
    }
  }
};
</script>

<style>
.display-3 {
  text-decoration: underline;
}
</style>
