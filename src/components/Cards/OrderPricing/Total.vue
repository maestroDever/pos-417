<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-flex>
          <h1 class="headline">Total: {{total}}</h1>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      total: "$"
    };
  }
};
</script>

<style>
h1 {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
</style>


