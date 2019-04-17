<template>
  <v-container>
    <h1 class="display-3">Store Dashboard</h1>

    <v-card>
      <v-container mt-3 mb-1>
        <v-layout>
          <v-flex text-xs-center>
            <!--  -->

            <!--  -->
            <v-btn class="success">
              <h3>News/Updates</h3>
            </v-btn>

            <!--  -->
            <v-flex>
              <v-list>
                <template v-for="item in newsUpdates">
                  <h3 class="highlight" :key="item.id">{{item.one}}</h3>
                  <h3 :key="item.id">{{item.two}}</h3>
                  <h3 :key="item.id">{{item.three}}</h3>
                  <h3 class="highlight" :key="item.id">{{item.four}}</h3>
                  <h3 :key="item.id">{{item.five}}</h3>
                </template>
              </v-list>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-carousel hide-controls height="240" dark>
      <v-carousel-item>
        <v-card>
          <v-container>
            <v-layout>
              <v-flex text-xs-center>
                <!--  -->

                <v-btn class="error">
                  <h3>Daily Promo</h3>
                </v-btn>
                <v-list>
                  <template v-for="item in dailyPromos">
                    <h3 class="dailyPromo" :key="item.id">{{item.one}}</h3>
                    <h3 :key="item.id">{{item.two}}</h3>
                    <h3 :key="item.id">{{item.three}}</h3>
                    <h3 :key="item.id">{{item.four}}</h3>
                    <h3 :key="item.id">{{item.five}}</h3>
                  </template>
                </v-list>
                <!--  -->
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-carousel-item>

      <v-carousel-item>
        <v-card>
          <v-container mt-1 mb-1>
            <v-layout>
              <v-flex text-xs-center>
                <!--  -->
                <v-btn class="info">
                  <h3>National Promos</h3>
                </v-btn>

                <v-list>
                  <template v-for="item in nationalPromos">
                    <h3 :key="item.id">{{item.one}}</h3>
                    <h3 :key="item.id">{{item.two}}</h3>
                    <h3 :key="item.id">{{item.three}}</h3>
                    <h3 :key="item.id">{{item.four}}</h3>
                    <h3 :key="item.id">{{item.five}}</h3>
                  </template>
                </v-list>
                <!--  -->
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-carousel-item>
      <v-carousel-item>
        <v-card>
          <v-container mb-1>
            <v-layout>
              <v-flex text-xs-center>
                <!--  -->
                <v-btn class="primary">
                  <h3>Local Promos</h3>
                </v-btn>

                <v-list>
                  <template v-for="item in localPromos">
                    <h3 :key="item.id">{{item.one}}</h3>
                    <h3 :key="item.id">{{item.two}}</h3>
                    <h3 :key="item.id">{{item.three}}</h3>
                    <h3 :key="item.id">{{item.four}}</h3>
                    <h3 :key="item.id">{{item.five}}</h3>
                  </template>
                </v-list>
                <!--  -->
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-carousel-item>
    </v-carousel>
    <Navdrawer/>
  </v-container>
</template>

<script>
import {
  db,
  nationalPromos,
  newsUpdates,
  localPromos,
  dailyPromos
} from "@/fb";
import Navdrawer from "@/components/Navdrawer/Navdrawer";

export default {
  components: { Navdrawer },
  data() {
    return {
      nationalPromos: [],
      newsUpdates: [],
      localPromos: [],
      dailyPromos: []
    };
  },
  created() {
    nationalPromos.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.nationalPromos.push({
          id: doc.id,
          one: doc.data().one,
          two: doc.data().two,
          three: doc.data().three,
          four: doc.data().four,
          five: doc.data().five
        });
      });
    });

    dailyPromos.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.dailyPromos.push({
          id: doc.id,
          one: doc.data().one,
          two: doc.data().two,
          three: doc.data().three,
          four: doc.data().four,
          five: doc.data().five
        });
      });
    });

    localPromos.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.localPromos.push({
          id: doc.id,
          one: doc.data().one,
          two: doc.data().two,
          three: doc.data().three,
          four: doc.data().four,
          five: doc.data().five
        });
      });
    });

    newsUpdates.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.newsUpdates.push({
          id: doc.id,
          one: doc.data().one,
          two: doc.data().two,
          three: doc.data().three,
          four: doc.data().four,
          five: doc.data().five
        });
      });
    });
  }
};
</script>

<style>
h1 {
  text-align: center;
  text-decoration: underline;
  color: rgb(255, 255, 255);
}
.dailyPromo {
  color: rgb(196, 67, 67);
}
.dashboard {
  color: rgb(255, 255, 255);
}
.highlight {
  color: rgb(196, 67, 67);
}
</style>

