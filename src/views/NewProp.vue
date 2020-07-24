<template>
    <v-form v-model="valid">
        <h1>צור אביזר חדש</h1>
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
                    <v-btn class="mr-4" @click="submit()">שמור</v-btn>
                </v-row>
            </v-container>

        </v-container>
    </v-form>
</template>


<script>
    import firebaseApi from "../middelware/firebaseApi";


    const tableName = "courseDetails"

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
                console.log(this.prop)
             firebaseApi.insertProp(this.prop)
            },
            clearField(){
                this.prop.propName = ''
                this.prop.propWeight = ''
            }
        },
        created() {
            if (this.course){
                this.item = this.course;
            }
        }
    }
</script>