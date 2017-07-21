'use strict'
const Elm = require('./elm.js')

// Die Reference zum Element container
let container = document.getElementById('container')

// Startet die elm app im container
let myapp = Elm.Main.embed(container)