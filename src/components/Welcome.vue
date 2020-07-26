<template>
    <v-container>
        <v-row class="text-center" justify="center">
            <v-col cols="12">
                <v-img
                        :src="require('../assets/logo.jpg')"
                        class="rounded-circle center"

                        height="150"
                        width="150"
                />
            </v-col>

            <v-col class="mb-4">
                <h2 class="display-1 font-weight-bold mb-3">
 ברוכים הבאים למחשבון האביזרים הנלווים
                </h2>

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