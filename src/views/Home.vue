<template>
  <v-container>
    <v-flex mb-5 text-xs-center>
      <h1 class="display-3">System Sign In</h1>
    </v-flex>
    <v-layout justify-center>
      <v-flex md6 mt-5>
        <v-card>
          <v-layout justify-center>
            <v-flex pa-5 mt-2>
              <v-form ref="form">
                <!-- Input Fields -->
                <v-text-field v-model="email" prepend-icon="access_time" label="Email"></v-text-field>

                <v-text-field
                  v-model="password"
                  :type="show1 ? 'text' : 'password'"
                  label="Password"
                  prepend-icon="access_time"
                ></v-text-field>
                <!--  -->
                <!--  -->
                <!-- Buttons -->
                <v-layout class="justify-center align-center">
                  <!-- <v-btn color="error" to="/mainmenu">Cancel</v-btn> -->

                  <v-btn large color="info" @click="login">Submit</v-btn>
                </v-layout>
                <!--  -->
              </v-form>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>




<script>
import firebase from "firebase";
import { db } from "@/fb";

export default {
  name: "login",
  data: function() {
    return {
      show1: false,
      password: "Password",

      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace("/mainmenu");
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
.white--text text-xs-center {
  text-decoration: none;
}
.display-3 {
  text-decoration: underline;
}
</style>
