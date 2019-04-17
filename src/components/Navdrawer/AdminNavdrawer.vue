<template>
  <nav>
    <v-toolbar height="50" app>
      <v-toolbar-side-icon large @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Admin Area</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app dark :width="275">
      <v-toolbar>
        <v-list class="pa-0">
          <v-list-tile avatar>
            <router-link to="/admin">
              <v-list-tile-avatar size="45">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/deploy-7003e.appspot.com/o/silver-mine-subs-beltline-733_1413916173403.png?alt=media&token=1cc3549b-3012-41e0-8af0-8a13b0842684"
                >
              </v-list-tile-avatar>
            </router-link>
            <v-spacer></v-spacer>
            <v-list-tile-content>
              <router-link class="mainmenu" to="/admin">
                <v-list-tile-title>
                  <h2>Silvermine Subs</h2>
                </v-list-tile-title>
              </router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <draggable :list="items" @start="dragging = true" @end="dragging = false">
        <v-list-tile v-for="item in items" :key="item.id" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-spacer/>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </draggable>
      <router-link to="/mainmenu">
        <v-footer height="50" class="justify-center pl-0" inset app>
          <v-icon left>arrow_back</v-icon>
          <h1 class="signOut">Sign Out</h1>
        </v-footer>
      </router-link>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  props: {
    permanent: Boolean
  },
  data: function() {
    return {
      drawer: true,
      // snackbar: false,
      items: [
        // {
        //   icon: "dashboard",
        //   title: "Welcome Screen",
        //   to: "/"
        // },
        {
          icon: "dashboard",
          title: "Daily Operations",
          to: "/admin"
        },
        {
          icon: "assessment",
          title: "Reports",
          to: "/reports"
        },
        {
          icon: "vertical_split",
          title: "Store Dashboard",
          to: "/storedashboard"
        },
        {
          icon: "calendar_today",
          title: "Schedule Management",
          to: "/thisweeksschedule"
        },
        {
          icon: "contacts",
          title: "Employee Management",
          to: "/employeemanagement"
        },

        {
          icon: "apps",
          title: "Menu Management",
          to: "/menumanagement"
        },

        {
          icon: "access_alarm",
          title: "Time Clock Management",
          to: "/timeclockmanagement"
        },
        {
          icon: "note",
          title: "Inventory Management",
          to: "/inventorymanagement"
        },
        {
          icon: "portrait",
          title: "Customer Management",
          to: "/customermanagement"
        },
        {
          icon: "check_box",
          title: "Order Management",
          to: "/ordermanagement"
        },
        {
          icon: "attach_money",
          title: "Pay Out Management",
          to: "/payoutmanagement"
        },
        {
          icon: "money",
          title: "Deposits",
          to: "/deposits"
        },
        {
          icon: "compare_arrows",
          title: "Switch Shifts",
          to: "/switchshifts"
        },
        {
          icon: "timeline",
          title: "Labor Management",
          to: "/labormanagement"
        }
      ]
    };
  },
  mounted() {
    console.log("App mounted!");
    if (localStorage.getItem("items"))
      this.items = JSON.parse(localStorage.getItem("items"));
  },
  watch: {
    items: {
      handler() {
        console.log("Position changed!");
        localStorage.setItem("items", JSON.stringify(this.items));
      },
      deep: true
    }
  }
};
</script>

<style>
.mainmenu {
  color: rgb(20, 78, 20);
}
.signOut {
  text-decoration: none;
}
</style>
