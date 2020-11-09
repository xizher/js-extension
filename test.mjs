// node --experimental-modules .\test.mjs

import './extension/date.ext.js'
import './extension/array.ext.js'
import './extension/number.ext.js'
import './extension/string.ext.js'
import './extension/math.ext.js'


const num = -123.2367

console.log(new Date().getMonth(true))
