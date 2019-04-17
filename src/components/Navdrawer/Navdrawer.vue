<template>
  <nav>
    <v-toolbar height="50" app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>POS</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app dark :width="275">
      <v-toolbar>
        <v-list class="pa-0">
          <v-list-tile avatar>
            <router-link to="/mainmenu">
              <v-list-tile-avatar>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/deploy-7003e.appspot.com/o/silver-mine-subs-beltline-733_1413916173403.png?alt=media&token=1cc3549b-3012-41e0-8af0-8a13b0842684"
                >
              </v-list-tile-avatar>
            </router-link>
            <v-spacer></v-spacer>
            <v-list-tile-content>
              <router-link class="mainmenu" to="mainmenu">
                <v-list-tile-title>
                  <h2>Silvermine Subs</h2>
                </v-list-tile-title>
              </router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-flex mt-2>
        <v-list>
          <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <v-list-tile-action>
              <v-icon large>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-spacer/>

            <v-list-tile-content>
              <h3>
                <v-list-tile-title v-text="item.title"/>
              </h3>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>

      <!-- <draggable :list="items" @start="dragging = true" @end="dragging = false">
        <v-list-tile v-for="item in items" :key="item.id" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-spacer/>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </draggable>-->

      <router-link to="/adminsignin">
        <v-footer class="justify-center pl-0" height="45" inset app>
          <v-icon class="icon__flip" left>build</v-icon>
          <span>
            <h1 class="router-link">Admin</h1>
          </span>
          <v-icon right>build</v-icon>
        </v-footer>
      </router-link>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import draggable from "vuedraggable";
export default {
  props: {
    permanent: Boolean
  },
  components: {
    draggable
  },
  data: function() {
    return {
      drawer: false,
      // snackbar: false,
      items: [
        {
          icon: "person_add",
          title: "Inshop",
          to: "/inshop"
        },
        {
          icon: "phone",
          title: "Phone",
          to: "/phone"
        },
        {
          icon: "drive_eta",
          title: "Delivery",
          to: "/delivery"
        },
        {
          icon: "search",
          title: "Order Search",
          to: "/ordersearch"
        },
        // {
        //   icon: "record_voice_over",
        //   title: "Customer Search",
        //   to: "/customersearch"
        // },
        {
          icon: "schedule",
          title: "Time Clock",
          to: "/timeclocksignin"
        },
        {
          icon: "calendar_today",
          title: "Schedule",
          to: "/schedule"
        }
      ]
    };
  }
  // mounted() {
  //   console.log("App mounted!");
  //   if (localStorage.getItem("items"))
  //     this.items = JSON.parse(localStorage.getItem("items"));
  // },
  // watch: {
  //   items: {
  //     handler() {
  //       console.log("Position changed!");
  //       localStorage.setItem("items", JSON.stringify(this.items));
  //     },
  //     deep: true
  //   }
  // }
};
</script>

<style>
.mainmenu {
  color: rgb(20, 78, 20);
  text-decoration: none;
}
.router-link {
  text-decoration: none;
  color: white;
}
.icon__flip {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}
.title {
  text-decoration: none;
}
</style>