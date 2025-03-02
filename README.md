# 🌲TreeAct
TreeAct - HTML Components with 0 dependency
* HTML frendly
* JS frendly
* CSS frendly

**❌️ Never React HTML with JS**

<br>

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

## Features

**Multiple Roots**
```html
<root src="App1.js"></root>
<root src="App2.js"></root>
```

**Import JS Files**
```js
import message from './message.js'

export default `
  <p> message: ${message} </p>
`
```

<br>

## Advance Usage

<br>

**Lambda**

```js
// card.js
export default (child) => `
  <div class="card">${child}</div>
`

// App.js
import card from './card.js'
export default card(`hi i am inside a card`)
```

<br>

**Lambda Destructure**

```js
// App.js
import card from './card.js'

export default card({
  color: 'grey',
  child: `<p> hi i am inside a card </p>`,
})

// card.js
export default ({color="blue", child=""}) => `
  <div class="card" style="background-color:${color}">${child}</div>
`
```
