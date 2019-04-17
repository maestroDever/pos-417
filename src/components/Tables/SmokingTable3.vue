<template>
  <v-card>
    <v-data-table :rowsPerPageItems="[5]" :headers="headers" :items="order" :expand="expand">
      <template v-slot:items="props">
        <tr @click="props.expanded = !props.expanded">
          <td>{{ props.item.quantity }}</td>
          <td>{{ props.item.item }}</td>
          <td>{{ props.item.price }}</td>
        </tr>
      </template>
      <template v-slot:expand="props">
        <v-card flat>
          <v-btn @click="submit">Edit</v-btn>
          <h4>{{ props.item.notes }}</h4>
          <h4>{{ props.item.size }}</h4>
          <h4>{{ props.item.bread }}</h4>

          <h4>{{ props.item.mayo }}</h4>
          <h4>{{ props.item.ranch }}</h4>
          <h4>{{ props.item.yellowMustard }}</h4>
          <h4>{{ props.item.dijonMustard }}</h4>
          <h4>{{ props.item.honeyMustard }}</h4>
          <h4>{{ props.item.bleuCheese }}</h4>
          <h4>{{ props.item.ceaser }}</h4>
          <h4>{{ props.item.bbqSauce }}</h4>
          <h4>{{ props.item.franksRedHot }}</h4>
          <h4>{{ props.item.tomato }}</h4>
          <h4>{{ props.item.provolone }}</h4>
          <h4>{{ props.item.pepperjackCheese }}</h4>
          <h4>{{ props.item.cheddarCheese }}</h4>
          <h4>{{ props.item.turkey }}</h4>
          <h4>{{ props.item.coldRoastBeef }}</h4>
          <h4>{{ props.item.ham }}</h4>
          <h4>{{ props.item.salami }}</h4>
          <h4>{{ props.item.pepperoni }}</h4>
          <h4>{{ props.item.pastrami }}</h4>
          <h4>{{ props.item.bacon }}</h4>
          <h4>{{ props.item.meatball }}</h4>
          <h4>{{ props.item.cheeseSteak }}</h4>
          <h4>{{ props.item.chicken }}</h4>
          <h4>{{ props.item.hotRoastBeef }}</h4>
          <h4>{{ props.item.romaineLettuce }}</h4>
          <h4>{{ props.item.tuna }}</h4>
          <h4>{{ props.item.fetaCheese }}</h4>
          <h4>{{ props.item.pickle }}</h4>
          <h4>{{ props.item.bannanaPepper }}</h4>
          <h4>{{ props.item.jalepeno }}</h4>
          <h4>{{ props.item.redOnion }}</h4>
          <h4>{{ props.item.greenPepper }}</h4>
          <h4>{{ props.item.mushroom }}</h4>
          <h4>{{ props.item.cucumber }}</h4>
          <h4>{{ props.item.blackOlive }}</h4>
          <h4>{{ props.item.shreddedLettuce }}</h4>
          <h4>{{ props.item.oil }}</h4>
          <h4>{{ props.item.vinegar }}</h4>
          <h4>{{ props.item.oregano }}</h4>
          <h4>{{ props.item.parmesanCheese }}</h4>
        </v-card>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import db from "@/fb";

export default {
  data() {
    return {
      search: "",
      expand: false,
      headers: [
        { text: "Quantity", value: "quantity" },
        { text: "Item", value: "item" },
        { text: "Price", value: "price" }
      ],
      order: []
    };
  },
  methods: {
    submit() {
      this.$router.push("/tombstone/ID");
    }
  },
  created() {
    db.collection("buildingOrder").onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === "added") {
          this.order.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>