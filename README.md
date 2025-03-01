# TreeAct
TreeAct - React Alternative when JSX SUX, use pure HTML as String in JS, Create Components, copy paste any HTML file with 0 errors. light weight, start developing directly from browser, 0 dependency.

## Usage
`index.html`
```html
<root src="App.js"></root>
<script type="module" src="https://artony4444.github.io/TreeAct/TreeAct/TreeAct.js"></script>
```
`App.js`
```js
export default `
  <h1> hello world </h1>
`
```

### Multiple Roots
`index.html`
```html
<root src="App1.js"></root>
<root src="App2.js"></root>

<script type="module" src="https://artony4444.github.io/TreeAct/TreeAct/TreeAct.js"></script>
```

### Import Js Files
`App.js`
```js
import message from './message.js'

export default `
  <p> message: ${message} </p>
`
```

### Advance Usage
#### 1) Using lambda
`card.js`
```js
export default (child) => `
  <div class="card">${child}</div>
`
```
`App.js`
```js
import card from './card.js'

export default card(`hi i am inside a card`)
```
#### 2) Using lambda destructure
`App.js`
```js
import card from './card.js'

export default card({
  color: 'grey',
  child: `<p> hi i am inside a card </p>`,
})
```
`card.js`
```js
export default ({color="blue", child=""}) => `
  <div class="card" style="background-color:${color}">${child}</div>
`
```
