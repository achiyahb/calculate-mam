<template>
  <div class="about">
    <h1>רשימת הקיטים</h1>
    <v-container>
<ItemsTable :headers="headersKit" :items="kits"></ItemsTable>
    </v-container>
    <v-row>
      <v-spacer></v-spacer>
      <router-link to="/kits/new-kit">
        <v-btn class="mx-2 rounded" dark color="indigo">
          <v-icon dark>fa-plus</v-icon> קיט חדש
        </v-btn>
      </router-link>
    </v-row>
      <ItemsTable :headers="headersProps" :items="props"></ItemsTable>
    <v-row>
      <v-spacer></v-spacer>
      <router-link to="/props/new-prop">
        <v-btn class="mx-2 rounded "dark color="indigo">
          <v-icon dark>fa-plus</v-icon>  אביזר חדש
        </v-btn>
      </router-link>
    </v-row>
  </div>
</template>

<script>
  import ItemsTable from "../components/ItemsTable";
  import firebaseApi from "../middelware/firebaseApi";

  export default {
    name: "Kits",
    components: {
      ItemsTable
    },
    data:()=> ({
      kits: {},
      headersKit: [
          {text:'שם הקיט',value: 'kitName'}
      ],
        props: {},
        headersProps: [
            {text:'שם האביזר',value: 'propName'}
        ],
    }),
      created() {
          const self = this
          this.kits = firebaseApi.readKitsData()
              .then(result => {
                  self.kits = result
              })
          this.props = firebaseApi.readPropsData()
              .then(result => {
                  self.props = result
              })
      }
  }

</script>