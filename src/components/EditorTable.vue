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

    export default {
        name: "EditorTable",
        props: ['headers','prop'],
        data: () => ({
            item: []
        }),
        methods:{
            deleteItem(key){
             this.item = this.prop
                this.item = this.item.splice(key,1)
            },
        },
        created() {

        },

    }
</script>

<style scoped>

</style>