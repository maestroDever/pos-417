<template>
  <v-container fill-height grid-list-xl text-xs-center>
    <v-layout row wrap align-center>
      <v-flex></v-flex>
      <v-flex>
        <v-card>
          <v-container>
            <v-layout>
              <v-flex>
                <v-flex>
                  <h1 class="white--text text-xs-center">Schedule Sign In</h1>
                  <v-flex mb-4 mt-1></v-flex>
                </v-flex>
                <v-form ref="form">
                  <!-- Input Fields -->
                  <v-text-field v-model="email" prepend-icon="access_time" label="Email"></v-text-field>

                  <v-text-field
                    v-model="password"
                    :type="show1 ? 'text' : 'password'"
                    label="Password"
                    prepend-inner-icon="access_time"
                  ></v-text-field>
                  <!--  -->
                  <!-- Buttons -->
                  <v-layout class="justify-center align-center">
                    <router-link to="/schedule">
                      <v-btn color="error">Cancel</v-btn>
                    </router-link>

                    <v-btn large color="info" @click="login">Submit</v-btn>
                  </v-layout>
                  <!--  -->
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex></v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import firebase from "firebase";
import db from "@/fb";

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
          this.$router.replace("/admin");
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
a {
  text-decoration: none;
}
</style>
