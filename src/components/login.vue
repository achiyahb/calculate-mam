<template>
    <div>
        <v-container class="loginBtn">
            <v-btn @click="signIn()">
                התחבר
            </v-btn>
        </v-container>
    </div>
</template>


<script>
    import firebase from 'firebase'
    import firebaseInstance from "../middelware/firebase"
    const provider = new firebase.auth.GoogleAuthProvider();
    export default{
        name: "Login",
        methods: {
            signIn() {
                const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider()
                const self = this;
                firebaseInstance.firebase.auth().signInWithPopup(provider).then(function(result) {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    self.$router.push('/Kits')
                    // ...
                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                });

            }
        }
    }
</script>

<style>

</style>