
import gradient_style from './gradient_style.js'

export default (child) => `
    <div class="Screen">
        <div class="gradient top_gradient"></div>
        <div class="gradient bottom_gradient"></div>
        <div class="child">${child}</div>
    </div>
`
+ gradient_style({color : "rgba(50, 50, 100, 0.5)"})