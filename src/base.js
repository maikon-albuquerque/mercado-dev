const config = {
    apiKey: "AIzaSyCZ87fdpqgOMHH6evRhyLsbB5r33nln48Q",
    authDomain: "mercadodev-cdd2a.firebaseapp.com",
    databaseURL: "https://mercadodev-cdd2a.firebaseio.com",
    projectId: "mercadodev-cdd2a",
    storageBucket: "",
    messagingSenderId: "1006591301002"
  }

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export default base