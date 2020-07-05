<template>
  <div class="about">
    <h1>רשימת הקיטים</h1>
    <v-container>
      <GenericTable></GenericTable>
    </v-container>
  </div>
</template>

<script>
  import GenericTable from "../components/GenericTable";

  export default {
    name: "Kits",
    components: {
      GenericTable
    }
  }

</script>