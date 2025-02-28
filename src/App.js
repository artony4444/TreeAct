
import style from './css/style.js'
import js from './js/welcome.js'

import gradient from './items/gradient.js'
import center  from './items/center.js'

export default gradient(center(`
    <strong>WELCOME DEV</strong>
`))
+ style
+ js