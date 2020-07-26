<template>
    <v-form v-model="valid">
        <h1>{{this.$route.params.kitId?'ערוך קיט קיים':'צור קיט חדש'}}</h1>
        <v-container>
            <v-row>
                <v-col
                        cols="12"
                        md="12"
                >
                    <v-text-field
                            v-model="kitName"
                            :counter="100"
                            label="שם הקיט"
                            required
                    ></v-text-field>
                </v-col>

                <v-col
                        cols="12"
                        md="5"
                >
                    <template>
                        <v-container fluid>
                            <v-row>
                                    <v-combobox
                                            item-text="name"
                                            single-line
                                            return-object
                                            v-model="select"
                                            :items="props"
                                            label="אביזרים נלווים"
                                    ></v-combobox>
                            </v-row>
                        </v-container>
                    </template>
                </v-col>

                <v-col
                        cols="12"
                        md="5"
                >
                    <v-text-field
                            v-model="propQuantity"
                            label="כמות"
                            required
                    ></v-text-field>
                </v-col>
                <v-col
                        cols="12"
                        md="2"
                >
                    <v-btn class="mr-4" @click="addItem(select,propQuantity)">הוסף</v-btn>
                    <v-btn class="mr-4" @click="clearField()">נקה</v-btn>
                </v-col>
            </v-row>
            <editor-table :headers="headers" :prop="prop"></editor-table>
            <v-container>
                <v-row>
                    <v-spacer></v-spacer>
                    <router-link to="/kits">
                        <v-btn class="mr-4">חזור</v-btn>

                    </router-link>
                    <v-btn v-if="!$route.params.kitId" class="mr-4" @click="submit()">שמור</v-btn>
                    <v-btn v-else class="mr-4" @click="editKit()">ערוך</v-btn>
                </v-row>
            </v-container>

        </v-container>
    </v-form>
</template>


<script>
    import firebaseApi from "../middelware/firebaseApi";
    import EditorTable from "../components/EditorTable";
    import router from "../router"

    const tableName = "courseDetails"


    export default {
        name: 'NewKit',

        components: {
            EditorTable

        },
        data: () => ({
            valid: false,

                kitName: '',

                select: [],
                props: [],
            propQuantity: null,
            headers: {
                0:    {
                    text: 'שם האביזר',
                    value: 'itemName',
                    align: 'start',
                    sortable: 'true',
                },
                1:   { text: 'כמות', value: 'quantity' },
            },
            prop: []
        }),
        methods: {
            submit() {
             const theKit = {
                 kitName: this.kitName,
                 props: {}
             }
             for (let p of this.prop){
                 theKit.props[p.itemName] = {}
                 theKit.props[p.itemName].quantity = p.quantity
                 theKit.props[p.itemName].id = p.id

             }
             firebaseApi.insertKit(theKit)
            },
            addItem(select,propQuantity) {
                const item = {itemName:`${select.name}`,quantity:`${propQuantity}`,id:`${select.key}`}
                this.prop.push(item)
                this.clearField()
            },
            clearField(){
                this.select = ''
                this.propQuantity = ''
            },
            editKit(){
                const self = this
                const theKit = {
                    kitName: this.kitName,
                    props: {}
                }
                for (let p of this.prop){
                    theKit.props[p.itemName] = {}
                    theKit.props[p.itemName].quantity = p.quantity
                    theKit.props[p.itemName].id = p.id

                }
                firebaseApi.updateKit(theKit, self)
            }
        },
        created() {
            const self = this
            if (this.$route.params.kitId){
                let kit = firebaseApi.readKitsData(self)
                    .then(result => {
                        kit = result
                    self.kitName = kit.kitName
                    let props = kit.props
                        for (let prop in props){
                            let item = {}
                            item.itemName = prop
                            item.quantity = props[prop].quantity
                            item.id = props[prop].id
                            self.prop.push(item)
                        }
                    })
            }
           let propsObj = firebaseApi.readPropsData()
            .then(result => {
                propsObj = result
                for (let prop1 in propsObj){
                   let prop ={}
                    prop.name = propsObj[prop1].propName
                    prop.key = prop1
                     self.props.push(prop)
                }
            })
        }
    }
</script>