<template>
    <v-container>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th></th>
                    <th class="text-center" v-for="(prop,key) in kitProps">{{key}}</th>
                </tr>
                </thead>

                <tbody>

                <tr>
                    <td>כמות לקיט בודד</td>
                    <td class="text-center" v-for="(item) in kitProps" >{{item.quantity}}
                    </td>
                </tr>
                <tr>
                    <td> כמות לפי מספר קיטים</td>
                    <td class="text-center" v-for="(item) in kitProps" >{{item.quantity * kitsQuantity}}
                    </td>
                </tr>
                <tr>
                    <td>משקל לפי מספר הקיטים</td>
                    <td class="text-center" v-for="(item) in kitProps" >{{propsObj[item.id].propWeight * item.quantity * kitsQuantity}}
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