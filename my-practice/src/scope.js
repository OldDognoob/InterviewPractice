// global namespace
var g = 'global';
function globalFunc(){
    function innerFunc(){
        console.log(g);
    }
    innerFunc();
}

// function scope

function myFavoriteFunc(a){
    if(true){
        var b = 'Hello' + a;
    }
    return b;
}
myFavoriteFunc('World');
// eslint-disable-next-line no-undef
console.log(a);// throw as a n error that is not define
// eslint-disable-next-line no-undef
console.log(b);// it will stop