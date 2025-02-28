
export default ({color = "rgba(50, 50, 100, 0.5)"}) => `<style>
    
    :root
    {
        --duration: 1s;
    }
    
    .child
    {
        position: absolute;
        z-index: 10;
        width:100%; height:100%;
    }
    
    .gradient
    {
        position: absolute;
        width: 100%; height: 100%;
        opacity: 100%;
    }
    
    .bottom_gradient
    {
        background-color: black;
        mask-image: linear-gradient(to right, black, rgba(0,0,0,0));
        transition: background-color 1s;
        animation: color var(--duration) ease-out alternate infinite;
    }
    
    .top_gradient
    {
        background-color: black;
        mask-image: linear-gradient(to right, rgba(0,0,0,0), black);
        transition: background-color 1s;
        animation: color var(--duration) ease-out alternate-reverse infinite;
    }
    
    @keyframes color
    {
        0%   { background-color: rgb(0, 0, 0); }
        33%  { background-color: ${color}; }
        50%  { background-color: rgb(0, 0, 0); }
        66%  { background-color: ${color}; }
        100% { background-color: rgb(0, 0, 0); }
    }
    
</style>`
