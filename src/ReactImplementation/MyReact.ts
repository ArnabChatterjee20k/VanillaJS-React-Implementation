export const myreact = (function(){
    let _root:Element;
    let _templateCallback:TempCallback;

    function init(root:Element,templateCallaback:TempCallback){
        _root = root;
        _templateCallback = templateCallaback;
        render();
    }

    function render(){
        _root.appendChild(_templateCallback());
    }

    return {init,render};
})()

type TempCallback = {():Element;}