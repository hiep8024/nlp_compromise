'use strict';
//this file is not included in the build.
//use it for messing around.
const nlp = require('./src/index');

// console.log(nlp('this is a sentence.').terms.find().reverse().find().first())
// console.log(nlp('this is a sentence. it is nice').sentences.unique().first())
let r = nlp('shoe')._sentences[0]._terms[0].info('plural')
console.log(r)
