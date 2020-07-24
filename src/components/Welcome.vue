<template>
    <v-container>
        <v-row class="text-center" justify="center">
            <v-col cols="12">
                <v-img
                        :src="require('../assets/logo.jpg')"
                        class="rounded-circle center"

                        height="180"
                        width="180"
                />
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
 ברוכים הבאים למערכת לעריכת הקיטים
                </h1>

                <p class="subheading font-weight-regular">
                להתחלת עריכה התחבר
                </p>
                <login></login>
            </v-col>


        </v-row>
    </v-container>
</template>

<script>
    import Login from "./login";
    export default {
        name: 'Welcome',
        components: {Login},
        data: () => ({

        }),
    }
</script>

<style>
    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
</style>