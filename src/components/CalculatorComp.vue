<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col
                        cols="6"
                        md="6"
                >
                    <template>
                        <v-container fluid>
                            <v-row>
                                <v-combobox
                                        item-text="name"
                                        single-line
                                        return-object
                                        v-model="select"
                                        :items="kits"
                                        label="בחר קיט מהרשימה"
                                        @change="chooseKit(select)"
                                ></v-combobox>
                            </v-row>
                        </v-container>
                    </template>
                </v-col>

                <v-col
                        cols="6"
                        md="6"
                >
                    <v-text-field
                            v-model="kitsQuantity"
                            label="כמות"
                            required
                    ></v-text-field>
                </v-col>
                <v-col
                        cols="12"
                        md="2"
                >
                    <v-btn class="mr-4" @click="clearField()">נקה</v-btn>
                </v-col>
                <v-col>
                    <calculator-table v-if="table" :kitProps="kitProps" :kitsQuantity="kitsQuantity"></calculator-table>
                </v-col>
            </v-row>
            <v-container>
                <v-row>
                    <v-spacer></v-spacer>
                    <router-link to="/kits">
                    </router-link>
                </v-row>
            </v-container>

        </v-container>
    </v-form>
</template>


<script>
    import firebaseApi from "../middelware/firebaseApi";
    import CalculatorTable from "./calculatorTable";

    export default {
        name: 'NewKit',

        components: {
            CalculatorTable

        },
        data: () => ({
            valid: null,
            kitsQuantity: '',
            select: [],
            kits: [],
            kitsObj: {},
            table: false,
            kitProps: {}
        }),
        methods: {
            chooseKit(select) {
                if (select === null){
                    return
                }
                this.kitProps = this.kitsObj[select.key].props
                this.table = true
            },
            clearField(){
                this.select = ''
                this.kitsQuantity = ''
            }
        },
        created() {
            const self = this
            this.kitsObj = firebaseApi.readKitsData()
                .then(result => {
                    self.kitsObj = result

                    for (let kit in self.kitsObj){
                        let kits = {}
                        kits.name = (self.kitsObj[kit].kitName)
                        kits.key = kit
                        self.kits.push(kits)
                    }

                })
        }
    }
</script>