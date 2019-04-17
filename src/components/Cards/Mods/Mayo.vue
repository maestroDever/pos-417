<template>
  <v-container>
    <v-layout wrap align-center>
      <v-flex>
        <v-select placeholder="Regular" :items="items" label="Mayo" outline></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["None", "Extra", "Easy", "Regular"]
  })
};
</script>