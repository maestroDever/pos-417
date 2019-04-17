<template>
  <v-container fill-height grid-list-md text-xs-center>
    <v-layout>
      <v-flex>
        <v-card>
          <v-flex pa-3>
            <h1 class="headline">Total: {{total}}</h1>
          </v-flex>
          <v-flex pa-4>
            <v-btn to="/menu" large class="error">Back</v-btn>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      total: "$5.59"
    };
  }
};
</script>
