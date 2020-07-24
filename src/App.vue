<template dir="rtl">
  <v-app id="inspire" dir="rtl">


    <v-app-bar
            app
            clipped-left
            dir="rtl"
    >
          <v-toolbar-title>מערכת לעריכת קיטים</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    </v-app-bar>

    <v-main>
      <v-container
              class="fill-height"
              fluid
      >
        <v-row
                align="center"
                justify="center"
        >
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            dir="rtl"
    >
      <v-list dense>
        <router-link to="/">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>דף הבית</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link to="/kits">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>עריכת הקיטים והאביזרים</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link to="/calculator">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>מחשבון אביזרים נלווים</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Home from "./views/Home";
  export default {
    components: {Home},
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>

<style>
  a{
    text-decoration: none;
  }
</style>