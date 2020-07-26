<template>
    <v-container>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th></th>
                    <th>כמות לקיט בודד</th>
                    <th> כמות לפי מספר קיטים</th>
                    <th>משקל לפי מספר הקיטים</th>
                </tr>
                </thead>

                <tbody>
                <tr class="text-center" v-for="(prop,key) in kitProps">
                    <td>{{key}}</td>
                    <td>{{prop.quantity}}</td>
                    <td>{{prop.quantity * kitsQuantity}}</td>
                    <td>{{prop.quantity * kitsQuantity * propsObj[prop.id].propWeight}}</td>
                </tr>
                <tr>

                </tr>
                </tbody>
            </template>
        </v-simple-table>

    </v-container>
</template>

<script>
    import firebaseApi from "../middelware/firebaseApi";

    export default {
        name: "calculatorTable",
        props: ['kitProps','kitsQuantity'],
        data: () => ({
            item: [],
            props: [],
            propsObj: {},
            hadData: false
        }),
        methods:{
        },
        created() {
            const self = this
            this.propsObj = firebaseApi.readPropsData()
                .then(result => {
                    self.propsObj = result
                    self.hasData = true
                        })
        },

    }
</script>

<style scoped>

</style>