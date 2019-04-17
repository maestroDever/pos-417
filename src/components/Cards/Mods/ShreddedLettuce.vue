<template>
  <v-container fluid grid-list-xl text-xs-center>
    <v-layout wrap align-center>
      <v-flex d-flex>
        <v-select placeholder="Regular" :items="items" label="Shredded Lettuce" outline></v-select>
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