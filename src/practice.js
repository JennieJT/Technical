let a = "1";
var b ='is b a glocal scope?'; //scope pollution
console.log("I'm in practice.js displaying variables from another.js: "  );

//Use closure to solve certain scope pollution issues. 
(function(){
    var c = "is c a global scope?"
    d = "d in practice this IS a scope pollution HELL"
}())

/**
 * Closure
 * Objects of functions
 */
const fRes = function(){
    var c = "is c a global scope?"
    d = "d in practice this IS a scope pollution HELL"
    const innerFa = ()=>{
        return "a" + 1;
    }
    const innerFb = ()=>{
        return 2 + 3 + "\n" + c;
    }
    return {
        innerFa: innerFa,
        innerFb: innerFb
    };
}()

//execute the fuction & print the function
console.log("function 1: " + fRes.innerFa()+ "\n"+ fRes.innerFa);
console.log("function 2: " + fRes.innerFb() + "\n" + fRes.innerFb);