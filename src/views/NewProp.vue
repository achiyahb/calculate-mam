<template>
    <v-form v-model="valid">
        <h1> {{$route.params.propId?'ערוך אביזר קיים':'צור אביזר חדש'}}</h1>
        <v-container>
            <v-row>
                <v-col
                        cols="12"
                        md="12"
                >
                    <v-text-field
                            v-model="prop.propName"
                            :counter="100"
                            label="שם האביזר"
                            required
                    ></v-text-field>
                </v-col>


                <v-col
                        cols="12"
                        md="5"
                >
                    <v-text-field
                            v-model="prop.propWeight"
                            label="משקל ליחידה"
                            required
                    ></v-text-field>
                </v-col>
                <v-col
                        cols="12"
                        md="2"
                >
                    <v-btn class="mr-4" @click="clearField()">נקה</v-btn>
                </v-col>
            </v-row>
            <v-container>
                <v-row>
                    <v-spacer></v-spacer>
                    <router-link to="/kits">
                        <v-btn class="mr-4">חזור</v-btn>

                    </router-link>
                    <v-btn v-if="!$route.params.propId" class="mr-4" @click="submit()">שמור</v-btn>
                    <v-btn v-else class="mr-4" @click="editProp()">ערוך</v-btn>
                </v-row>
            </v-container>

        </v-container>
    </v-form>
</template>


<script>
    import firebaseApi from "../middelware/firebaseApi";

    export default {
        name: 'NewProp',


        data: () => ({
            valid: false,
                prop: {
                    propName: '',
                    propWeight: null,
                }
        }),
        methods: {
            submit() {
                const prop =this.prop
             firebaseApi.insertProp(prop)
            },
            clearField(){
                this.prop.propName = ''
                this.prop.propWeight = ''
            },
            editProp(){
                const self =this
                firebaseApi.updateProp(this.prop, self)
            }
        },
        created() {
            const self = this
            if (this.$route.params.propId) {
                this.prop = firebaseApi.readPropsData(self)
                    .then(result => {
                        self.prop = result
                    })
            }
        }
    }
</script>