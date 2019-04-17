<template>
  <v-container text-xs-center>
    <v-layout wrap align-center>
      <v-flex>
        <v-select solo :items="items" :v-bind="bread" label="Bread Options" outline></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import db from "@/fb";

export default {
  data() {
    return {
      bread: "",
      items: ["White", "Wheat", "Flour Wrap", "Spinach Wrap"]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const smoked = {
          bread: this.bread
        };
        console.log(smoked);
        db.collection("order")
          .add(smoked)
          .then(() => {
            this.dialog = false;
          });
      }
    }
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

