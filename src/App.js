
import style from './css/style.js'
import js from './js/welcome.js'

import center from './items/center.js'
import card from './items/card.js'

export default `
    <!-- Your HTML code goes Here -->
`
+ style
+ js

// for advance usage check ./items/
+ center(
    card({
        color: "#408cff",
        child: `<strong>Hello World</strong>`
    })
)