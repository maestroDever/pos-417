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
                  <h1 class="white--text text-xs-center">Sign In</h1>
                  <v-flex mb-4 mt-1></v-flex>
                </v-flex>
                <v-form ref="form">
                  <!-- Input Fields -->
                  <v-text-field v-model="username" prepend-icon="access_time" label="Username"></v-text-field>

                  <v-text-field v-model="password" prepend-icon="access_time" label="Password"></v-text-field>
                  <!--  -->
                  <!-- Buttons -->
                  <v-layout class="justify-center align-center">
                    <router-link to="/mainmenu">
                      <v-btn large color="info">Submit</v-btn>
                    </router-link>
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
export default {
  data() {
    return {
      username: "",
      password: "",
      dialog: false,
      modal: false,
      menu: false
    };
  },

  computed: {
    formattedDate() {
      return this.date ? format(this.date, "MMMM D,  YYYY") : "";
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
