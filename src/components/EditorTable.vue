<template>
    <v-container>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-right" v-for="header in headers">{{header.text}}</th>
                    <th class="text-right">פעולות</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="(item,key) in prop" :key="item.name">
                    <td v-for="header in headers" @click="editChild(key)">{{item[header.value]}}
                    </td>
                    <td>
                        <v-icon
                                small
                                class="fas fa-trash-alt"
                                @click="deleteItem(key)"
                        ></v-icon>
                    </td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>

    import firebaseApi from "../middelware/firebaseApi";
    import firebase from 'firebase/app'
    import 'firebase/database'
    import firebaseInstance from '../middelware/firebase';
    import database from 'firebase/database'
    import router from "../router";

    const db = firebaseInstance.firebase.database();
    export default {
        name: "GenericTable",
        props: ['headers','prop'],
        data: () => ({
            items: []
        }),
        methods:{
            deleteItem(key){
             this.item = this.prop
                this.item = this.item.splice(key,1)
            },
        },
        created() {
            // const self = this;
            // const path = firebaseApi.pathFactory(this.data.pathNum, self)
            // this.items = firebaseApi.getData(path)
            //     .then(result => {
            //         self.items = result
            //     })
        },

    }
</script>

<style scoped>

</style>