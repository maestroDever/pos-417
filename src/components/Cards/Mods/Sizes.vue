<template>
  <v-container fluid text-xs-center>
    <v-layout wrap align-center>
      <v-flex>
        <v-select solo v-model="size" :items="items" label="Size" outline></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    size: "",
    items: ["Small", "Medium", "Large", "Xtra Large"]
  }),
  methods: {
    submit() {
      const size = {
        size: this.size
      };
      console.log(size);
      db.collection("order")
        .add(size)
        .then(() => {
          this.dialog = false;
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


};
</script>