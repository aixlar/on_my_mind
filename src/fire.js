import firebase from 'firebase'

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "onmymindproject",
    messagingSenderId: ""
}

var fire = firebase.initializeApp(config)
export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default fire
