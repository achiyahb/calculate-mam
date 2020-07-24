<template>
  <div class="about">
    <h1>רשימת הקיטים</h1>
    <v-container>
<ItemsTable></ItemsTable>
    </v-container>
    <v-row>
      <v-spacer></v-spacer>
      <router-link to="/kits/new-kit">
        <v-btn class="mx-2" fab dark color="indigo">
          <v-icon dark>fa-plus</v-icon> קיט חדש
        </v-btn>
      </router-link>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <router-link to="/kits/new-prop">
        <v-btn class="mx-2" fab dark color="indigo">
          <v-icon dark>fa-plus</v-icon> אביזר חדש
        </v-btn>
      </router-link>
    </v-row>
  </div>
</template>

<script>
  import ItemsTable from "../components/ItemsTable";

  export default {
    name: "Kits",
    components: {
      ItemsTable
    }
  }

</script>