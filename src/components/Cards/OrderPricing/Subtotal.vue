<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-flex>Sub Total: {{subtotal}}</v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      subtotal: "$"
    };
  }
};
</script>