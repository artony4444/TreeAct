

// Config

let tag     = "root"    // <root>
let origin  = "origin"  // <script origin='src/js/treeact_files/' ...

let info    = 1
let error   = 1


// ------------------------------------------------------------
//
//    Copyright © Artony4444 2025
//    Repository: https://github.com/artony4444/treeact/
//
// ------------------------------------------------------------


/* LOGs -------------------------------- */


let info_no_roots = () => info ? [
    console.log(`add <root> to get started`),
    console.log(`<root src="{app_location}"></root>`),
] : 0

let error_bad_location = (url, err) => error ? [
    console.error(`fail to import <root> at ${url}`),
] : 0


/* ------------------------------------- */


var print = (...t) => console.log(...t)
var render = (fs) => typeof fs == "function" ? fs() : fs

let script; document.querySelectorAll(`script[${origin}]`).forEach((e) => { script = (e.src == import.meta.url) ? e : 0 })

let base = "/" + (script ? script.getAttribute(origin) : "");

let roots = document.querySelectorAll(tag); !roots.length ? info_no_roots() : 0;

roots.forEach((e) => {
    let url = base + e.getAttribute('src')
    import(url).then((m) => {
        let app = render(m.default)        
        e.append(document.createRange().createContextualFragment(app))
    })
    .catch((err) => {
        if(err.message.includes("Failed to fetch dynamically imported module:")) error_bad_location(url, err)
        else throw err;
    })
})



































