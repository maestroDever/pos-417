<template>
  <div>
    <v-layout flat row justify-center>
      <v-btn round color="primary" large dark @click="dialog = true">Cheese</v-btn>

      <v-dialog
        origin="center center"
        max-width="1000"
        v-model="dialog"
        transition="dialog-top-transition"
        scrollable
        persistent
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <!-- <v-btn icon dark @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>-->
            <v-toolbar-title>Cheese Menu</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click="dialog = false">Cancel</v-btn>
              <v-btn dark flat @click="dialog = false">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-container pa-5 wrap grid-list-xl>
            <v-layout pa-5 justify-center row wrap align-center>
              <v-flex md2>
                <v-select
                  color="success"
                  background-color="#D4CA6A"
                  v-model="cheddarCheese"
                  persistent-hint
                  return-object
                  :items="cheddarCheeses"
                  label="Cheddar"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md2>
                <v-select
                  color="success"
                  background-color="#D4CA6A"
                  v-model="pepperjackCheese"
                  persistent-hint
                  return-object
                  :items="pepperjackCheeses"
                  label="Pepperjack"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md2>
                <v-select
                  color="success"
                  background-color="#D4CA6A"
                  v-model="fetaCheese"
                  persistent-hint
                  return-object
                  :items="fetaCheeses"
                  label="Feta"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md2>
                <v-select
                  color="success"
                  background-color="#D4CA6A"
                  v-model="parmesanCheese"
                  persistent-hint
                  return-object
                  :items="parmesanCheeses"
                  label="Parmesan"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <!-- <v-flex pa-3>
            <v-btn color="success" large>
              <h1 headline>Done</h1>
            </v-btn>
          </v-flex>-->
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
export default {
  // components: {  },
  data() {
    return {
      dialog: false,
      notifications: false,
      provolones: [
        "No Provolone",
        "Extra Provolone",
        "Easy Provolone",
        "Provolone"
      ],
      provolone: "",
      cheddarCheeses: [
        "Add Cheddar Cheese",
        "Extra Cheddar Cheese",
        "Easy Cheddar Cheese",
        "No Cheddar Cheese"
      ],
      cheddarCheese: "",
      fetaCheeses: [
        "Add Feta Cheese",
        "Extra Feta Cheese",
        "Easy Feta Cheese",
        "No Feta Cheese"
      ],
      fetaCheese: "",
      parmesanCheeses: [
        "Add Parmesan Cheese",
        "Extra Parmesan Cheese",
        "Easy Parmesan Cheese",
        "No Parmesan Cheese"
      ],
      parmesanCheese: "",
      pepperjackCheeses: [
        "Add Pepperjack Cheese",
        "Extra Pepperjack Cheese",
        "Easy Pepperjack Cheese",
        "No Pepperjack Cheese"
      ],
      pepperjackCheese: "",

      dialog: false,
      notifications: false
    };
  },
  methods: {
    submit() {
      const order = {
        provolone: this.provolone,

        cheddarCheese: this.cheddarCheese,
        pepperjackCheese: this.pepperjackCheese,
        fetaCheese: this.fetaCheese
      };
      console.log(order);
      db.collection("order")
        .add(order)
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
.border {
  background: transparent !important;
  border-radius: 4px;
}
</style>