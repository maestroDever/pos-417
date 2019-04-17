<template>
  <div>
    <v-layout flat row justify-center>
      <v-btn round block color="primary" large dark @click="dialog = true">Georgetown</v-btn>

      <v-dialog origin="center center" v-model="dialog" persistent fullscreen>
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-toolbar-title>Modifier Menu</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-flex mt-2>
              <v-text-field v-model="notes" return-object single-line solo label="Notes:"></v-text-field>
            </v-flex>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <!--  -->
              <v-flex mt-1>
                <v-select
                  solo
                  v-model="item"
                  :items="items"
                  item-text="sandwich"
                  persistent-hint
                  return-object
                  single-line
                  outline
                ></v-select>
              </v-flex>
              <v-flex mt-1>
                <v-select
                  solo
                  v-model="quantity"
                  :items="quantitys"
                  item-text="quantity"
                  persistent-hint
                  return-object
                  single-line
                  outline
                ></v-select>
              </v-flex>

              <!--  -->
              <!-- Buttons -->
              <v-btn dark flat @click.native="dialog = false">Cancel</v-btn>
              <v-btn dark flat @click="submit">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <!-- Sizes and Breads -->
          <v-container fluid>
            <h1 align="center">Size and Bread</h1>

            <v-layout justify-center row wrap align-center>
              <v-flex></v-flex>
              <v-flex>
                <v-select
                  color="success"
                  background-color="error"
                  prepend-inner-icon="report_problem"
                  v-model="size"
                  persistent-hint
                  return-object
                  :items="sizes"
                  label="Size"
                  outline
                  flat
                ></v-select>
              </v-flex>
              <v-flex>
                <v-select
                  color="success"
                  background-color="error"
                  prepend-inner-icon="report_problem"
                  v-model="bread"
                  persistent-hint
                  return-object
                  :items="breads"
                  label="Bread"
                  outline
                  flat
                ></v-select>
              </v-flex>
              <v-flex></v-flex>
            </v-layout>

            <!--  -->
            <!-- Tombstone Standard Ingredients -->
            <h1 align="center">Standard Ingredients</h1>

            <v-layout justify-center row wrap align-center>
              <v-flex md1>
                <v-select
                  color="success"
                  background-color="info"
                  prepend-inner-icon="check_circle"
                  v-model="turkey"
                  persistent-hint
                  return-object
                  :items="turkeys"
                  label="Turkey"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="info"
                  prepend-inner-icon="check_circle"
                  v-model="bacon"
                  persistent-hint
                  return-object
                  :items="bacons"
                  label="Bacon"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="info"
                  prepend-inner-icon="check_circle"
                  v-model="ranch"
                  persistent-hint
                  return-object
                  :items="ranchs"
                  label="Ranch"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="info"
                  prepend-inner-icon="check_circle"
                  v-model="tomato"
                  persistent-hint
                  return-object
                  :items="tomatos"
                  label="Tomato"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="info"
                  prepend-inner-icon="check_circle"
                  v-model="provolone"
                  persistent-hint
                  return-object
                  :items="provolones"
                  label="Provolone"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="info"
                  prepend-inner-icon="check_circle"
                  v-model="avacado"
                  persistent-hint
                  return-object
                  :items="avacados"
                  label="Avacado"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="info"
                  prepend-inner-icon="check_circle"
                  v-model="shreddedLettuce"
                  persistent-hint
                  return-object
                  :items="shreddedLettuces"
                  label="Shredded Lettuce"
                  outline
                ></v-select>
              </v-flex>
            </v-layout>
            <!--  -->
            <!-- Condiments -->
            <!--  -->
            <h1 align="center">Condiments</h1>

            <v-layout justify-center row wrap align-center>
              <v-flex md1>
                <v-select
                  color="success"
                  v-model="mayo"
                  persistent-hint
                  return-object
                  :items="mayos"
                  label="Mayo"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  v-model="bleuCheese"
                  persistent-hint
                  return-object
                  :items="bleuCheeses"
                  label="Bleu Cheese"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="yellow"
                  v-model="yellowMustard"
                  persistent-hint
                  return-object
                  :items="yellowMustards"
                  label="Yellow Mustard"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="yellow"
                  v-model="honeyMustard"
                  persistent-hint
                  return-object
                  :items="honeyMustards"
                  label="Honey Mustard"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="yellow"
                  v-model="dijonMustard"
                  persistent-hint
                  return-object
                  :items="dijonMustards"
                  label="Dijon Mustard"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#AAA039"
                  v-model="oil"
                  persistent-hint
                  return-object
                  :items="oils"
                  label="Oil"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="purple"
                  v-model="vinegar"
                  persistent-hint
                  return-object
                  :items="vinegars"
                  label="Vinegar"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#25705A"
                  v-model="oregano"
                  persistent-hint
                  return-object
                  :items="oreganos"
                  label="Oregano"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#AA9F39"
                  v-model="ceaser"
                  persistent-hint
                  return-object
                  :items="ceasers"
                  label="Ceaser"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="brown"
                  v-model="bbqSauce"
                  persistent-hint
                  return-object
                  :items="bbqSauces"
                  label="BBQ Sauce"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#AA3939"
                  v-model="franksRedHot"
                  persistent-hint
                  return-object
                  :items="franksRedHots"
                  label="Franks Red Hot"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>
            </v-layout>
            <!--  -->
            <!-- Veggies -->
            <h1 align="center">Veggies</h1>
            <v-layout justify-center row wrap>
              <!-- <v-flex md1>
                <v-select
                  color="success"
                  background-color="success"
                  v-model="avacado"
                  persistent-hint
                  return-object
                  :items="avacados"
                  label="Avacado"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>-->

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="success"
                  v-model="pickle"
                  persistent-hint
                  return-object
                  :items="pickles"
                  label="Pickles"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="success"
                  v-model="bannanaPepper"
                  persistent-hint
                  return-object
                  :items="bannanaPeppers"
                  label="Banana Peppers"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="success"
                  v-model="jalepeno"
                  persistent-hint
                  return-object
                  :items="jalepenos"
                  label="Jalepenos"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="success"
                  v-model="redOnion"
                  persistent-hint
                  return-object
                  :items="redOnions"
                  label="Red Onions"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="success"
                  v-model="greenPepper"
                  persistent-hint
                  return-object
                  :items="greenPeppers"
                  label="Green Peppers"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="success"
                  v-model="mushroom"
                  persistent-hint
                  return-object
                  :items="mushrooms"
                  label="Mushrooms"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="success"
                  v-model="cucumber"
                  persistent-hint
                  return-object
                  :items="cucumbers"
                  label="Cucumbers"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="success"
                  v-model="blackOlive"
                  persistent-hint
                  return-object
                  :items="blackOlives"
                  label="Black Olives"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="success"
                  v-model="romaineLettuce"
                  persistent-hint
                  return-object
                  :items="romaineLettuces"
                  label="Romaine"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>
            </v-layout>
            <!--  -->
            <!-- Cheeses -->
            <h1 align="center">Cheeses</h1>
            <v-layout justify-center row wrap>
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
            <!--  -->
            <!-- Meats -->
            <h1 align="center">Meats</h1>
            <v-layout justify-center row wrap align-center>
              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#C97700"
                  v-model="tuna"
                  persistent-hint
                  return-object
                  :items="tunas"
                  label="Tuna"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#C97700"
                  v-model="pastrami"
                  persistent-hint
                  return-object
                  :items="pastramis"
                  label="Pastrami"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#C97700"
                  v-model="coldRoastBeef"
                  persistent-hint
                  return-object
                  :items="coldRoastBeefs"
                  label="Cold Roast Beef"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#C97700"
                  v-model="ham"
                  persistent-hint
                  return-object
                  :items="hams"
                  label="Ham"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#C97700"
                  v-model="salami"
                  persistent-hint
                  return-object
                  :items="salamis"
                  label="Salami"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#C97700"
                  v-model="pepperoni"
                  persistent-hint
                  return-object
                  :items="pepperonis"
                  label="Pepperoni"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#C97700"
                  v-model="meatball"
                  persistent-hint
                  return-object
                  :items="meatballs"
                  label="Meatballs"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#C97700"
                  v-model="cheeseSteak"
                  persistent-hint
                  return-object
                  :items="cheeseSteaks"
                  label="Cheesesteak"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#C97700"
                  v-model="chicken"
                  persistent-hint
                  return-object
                  :items="chickens"
                  label="Chicken"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>

              <v-flex md1>
                <v-select
                  color="success"
                  background-color="#C97700"
                  v-model="hotRoastBeef"
                  persistent-hint
                  return-object
                  :items="hotRoastBeefs"
                  label="Hot Roast Beef"
                  placeholder="None"
                  outline
                ></v-select>
              </v-flex>
            </v-layout>
            <!--  -->
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import { db } from "@/fb";

export default {
  components: {},
  data() {
    return {
      items: ["Georgetown"],
      item: "Georgetown",
      quantitys: ["1", "1", "3", "4", "5"],
      quantity: "1",
      date: new Date().toISOString().substr(0, 10),
      time: Math.floor(Date.now() / 1000),
      price: 4.99,
      notes: "",
      sizes: ["Small", "Medium", "Large", "Xtra Large"],
      size: "",
      breads: ["White", "Wheat", "Flour Tortilla", "Spinach Tortilla"],
      bread: "",
      // Array //
      turkeys: [
        "No Turkey",
        "Extra Turkey",
        "Easy Turkey",
        "Regular Turkey",
        ""
      ],
      turkey: "",
      mayos: ["Add Mayo", "Extra Mayo", "Easy Mayo", "No Mayo"],
      mayo: "",
      tomatos: ["No Tomato", "Extra Tomato", "Easy Tomato", "Tomato"],
      tomato: "",
      provolones: [
        "No Provolone",
        "Extra Provolone",
        "Easy Provolone",
        "Provolone"
      ],
      provolone: "",
      shreddedLettuces: [
        "No Lettuce",
        "Extra Lettuce",
        "Easy Lettuce",
        "Lettuce"
      ],
      shreddedLettuce: "",
      ranchs: ["No Ranch", "Extra Ranch", "Easy Ranch", "Ranch"],
      ranch: "",
      yellowMustards: [
        "Add Yellow Mustard",
        "Extra Yellow Mustard",
        "Easy Yellow Mustard",
        "No Yellow Mustard"
      ],
      yellowMustard: "",
      dijonMustards: [
        "Add Dijon Mustard",
        "Extra Dijon Mustard",
        "Easy Dijon Mustard",
        "No Dijon Mustard"
      ],
      dijonMustard: "",
      honeyMustards: [
        "Add Honey Mustard",
        "Extra Honey Mustard",
        "Easy Honey Mustard",
        "No Honey Mustard"
      ],
      honeyMustard: "",
      bleuCheeses: [
        "Add Bleu Cheese",
        "Extra Bleu Cheese",
        "Easy Bleu Cheese",
        "No Bleu Cheese"
      ],
      bleuCheese: "",
      ceasers: ["Add Ceaser", "Extra Ceaser", "Easy Ceaser", "No Ceaser"],
      ceaser: "",
      oils: ["Add Oil", "Extra Oil", "Easy Oil", "No Oil"],
      oil: "",
      vinegars: ["Add Vinegar", "Extra Vinegar", "Easy Vinegar", "No Vinegar"],
      vinegar: "",
      oreganos: ["Add Oregano", "Extra Oregano", "Easy Oregano", "No Oregano"],
      oregano: "",
      bbqSauces: [
        "Add BBQ Sauce",
        "Extra BBQ Sauce",
        "Easy BBQ Sauce",
        "No BBQ Sauce"
      ],
      bbqSauce: "",
      franksRedHots: [
        "Add Franks Red Hot",
        "Extra Franks Red Hot",
        "Easy Franks Red Hot",
        "No Franks Red Hot"
      ],
      franksRedHot: "",
      pickles: ["Add Pickles", "Extra Pickles", "Easy Pickles", "No Pickles"],
      pickle: "",
      bannanaPeppers: [
        "Add Banana Peppers",
        "Extra Banana Peppers",
        "Easy Banana Peppers",
        "No Banana Peppers"
      ],
      bannanaPepper: "",
      jalepenos: [
        "Add Jalepenos",
        "Extra Jalepenos",
        "Easy Jalepenos",
        "None Jalepenos"
      ],
      jalepeno: "",
      greenPeppers: [
        "Add Green Peppers",
        "Extra Green Peppers",
        "Easy Green Peppers",
        "No Green Peppers"
      ],
      greenPepper: "",
      redOnions: [
        "Add Red Onions",
        "Extra Red Onions",
        "Easy Red Onions",
        "No Red Onions"
      ],
      redOnion: "",
      mushrooms: [
        "Add Mushrooms",
        "Extra Mushrooms",
        "Easy Mushrooms",
        "No Mushrooms"
      ],
      mushroom: "",
      cucumbers: [
        "Add Cucumbers",
        "Extra Cucumbers",
        "Easy Cucumbers",
        "No Cucumbers"
      ],
      cucumber: "",
      blackOlives: [
        "Add Black Olives",
        "Extra Black Olives",
        "Easy Black Olives",
        "No Black Olives"
      ],
      blackOlive: "",
      romaineLettuces: [
        "Add Romaine",
        "Extra Romaine",
        "Easy Romaine",
        "No Romaine"
      ],
      romaineLettuce: "",
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
      bacons: ["No Bacon", "Extra Bacon", "Easy Bacon", ""],
      bacon: "",
      tunas: ["Add Tuna", "Extra Tuna", "Easy Tuna", "No Tuna"],
      tuna: "",
      pastramis: [
        "Add Pastrami",
        "Extra Pastrami",
        "Easy Pastrami",
        "No Pastrami"
      ],
      pastrami: "",
      coldRoastBeefs: [
        "Add Cold Roast Beef",
        "Extra Cold Roast Beef",
        "Easy Cold Roast Beef",
        "No Cold Roast Beef"
      ],
      coldRoastBeef: "",
      hams: ["Add Ham", "Extra Ham", "Easy Ham", "No Ham"],
      ham: "",
      salamis: ["Add Salami", "Extra Salami", "Easy Salami", "No Salami"],
      salami: "",
      pepperonis: [
        "Add Pepperonis",
        "Extra Pepperonis",
        "Easy Pepperonis",
        "No Pepperonis"
      ],
      pepperoni: "",
      meatballs: [
        "Add Meatballs",
        "Extra Meatballs",
        "Easy Meatballs",
        "No Meatballs"
      ],
      meatball: "",
      cheeseSteaks: [
        "Add Cheesesteak",
        "Extra Cheesesteak",
        "Easy Cheesesteak",
        "No Cheesesteak"
      ],
      cheeseSteak: "",
      chickens: ["Add Chicken", "Extra Chicken", "Easy Chicken", "No Chicken"],
      chicken: "",
      hotRoastBeefs: [
        "Add Hot Roast Beef",
        "Extra Hot Roast Beef",
        "Easy Hot Roast Beef",
        "No Hot Roast Beef"
      ],
      hotRoastBeef: "",
      avacados: ["No Avacado", "Extra Avacado", "Easy Avacado", "Avacado"],
      avacado: "",

      dialog: false,
      notifications: false
    };
  },
  methods: {
    submit(invId) {
      this.$store.dispatch("submit", invId);
      const order = {
        date: this.date,
        time: this.time,
        item: this.item,
        quantity: this.quantity,
        notes: this.notes,
        size: this.size,
        price: this.price,
        bread: this.bread,
        turkey: this.turkey,
        mayo: this.mayo,
        tomato: this.tomato,
        provolone: this.provolone,
        shreddedLettuce: this.shreddedLettuce,
        ranch: this.ranch,
        yellowMustard: this.yellowMustard,
        dijonMustard: this.dijonMustard,
        honeyMustard: this.honeyMustard,
        bleuCheese: this.bleuCheese,
        ceaser: this.ceaser,
        oil: this.oil,
        vinegar: this.vinegar,
        oregano: this.oregano,
        bbqSauce: this.bbqSauce,
        franksRedHot: this.franksRedHot,
        pickle: this.pickle,
        bannanaPepper: this.bannanaPepper,
        jalepeno: this.jalepeno,
        redOnion: this.redOnion,
        greenPepper: this.greenPepper,
        mushroom: this.mushroom,
        cucumber: this.cucumber,
        blackOlive: this.blackOlive,
        romaineLettuce: this.romaineLettuce,
        cheddarCheese: this.cheddarCheese,
        pepperjackCheese: this.pepperjackCheese,
        fetaCheese: this.fetaCheese,
        bacon: this.bacon,
        tuna: this.tuna,
        pastrami: this.pastrami,
        coldRoastBeef: this.coldRoastBeef,
        ham: this.ham,
        salami: this.salami,
        pepperoni: this.pepperoni,
        meatball: this.meatball,
        cheeseSteak: this.cheeseSteak,
        chicken: this.chicken,
        hotRoastBeef: this.hotRoastBeef,
        avacado: this.avacado
      };
      console.log(order);
      db.collection("buildingOrder")
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

