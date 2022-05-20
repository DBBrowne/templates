// @ts-nocheck

var Crypto = require('Crypto')

var id = Crypto.randomUUID().slice(-12)

console.error(`ID: ${id}`)