<template>
  <v-container fluid grid-list-xl text-xs-center>
    <v-layout wrap align-center>
      <v-flex d-flex>
        <v-select placeholder="None" :items="items" label="Franks Red Hot" outline></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["Add", "Extra", "Easy", "None"]
  })
};
</script>