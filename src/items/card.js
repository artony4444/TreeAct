export default ({color="grey", child=""}={}) => `
    
    <div class="card">
        ${child}
    </div>
    
`
+ style(`
    
    .card
    {
        background-color: ${color};
        padding:1em;
        border-radius:10px;
        overflow:hidden;
        user-select: none;
        transition: all .2s ease-out;

    }
    
    .card:hover
    {
        filter: brightness(1.5);
        transform: scale(1.2);
        box-shadow: 0 0 30px 0 ${color}, inset 0 0 5px 1px #00000053;
    }
    
`)