<template>
    <v-container>
        <v-simple-table id="table">
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-right" v-for="header in headers" :class="{one: header.style}">{{header.text}}</th>
                    <th class="text-right">פעולות</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,key) in items" v-if="item" :key="item .name">
                    <td v-for="header in headers" :class="{one: header.style}" @click="editChild(key)">
                        {{item[header.value]}}
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

    export default {
        name: "GenericTable",
        props: ['headers', 'items'],
        data: () => ({

        }),
        methods:{
            deleteItem(key){
                firebaseApi.deletePropsData(key)
                return this.items[key]= undefined
            },
            editChild(key){
                if(this.$route.params.chaid){
                    router.push({ path: `/courses/${this.$route.params.cid}/chapters/${this.$route.params.chaid}/questions/${key}`})
                } else if (this.$route.params.cid){
                    router.push({ path: `/courses/${this.$route.params.cid}/chapters/${key}`})
                } else {
                    router.push({ path: `/courses/${key}`})
                }

            }
        },
        created() {
            // const self = this;
            // const path = firebaseApi.pathFactory(this.data.pathNum, self)
            // this.items = firebaseApi.getData(path)
            //     .then(result => {
            //         self.items = result
            //     })
        },
        watch:{
            addedNewItem(){
                this.getData();
            }
        }
    }
</script>

<style>

    @media only screen and (max-width: 900px) {
        .one{
            display: none;
        }

    }
</style>