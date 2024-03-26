console.log("I'm in another.js displying variables from practice.js: " + a + " " + b);
let c = "another 1";
var d = "another 2";
let curHash = window.location.hash;
window.addEventListener("popstate", function (event) {
    let anchor = this.document.location.hash;
    let preHash = curHash;
    curHash = anchor;
    this.document.querySelector(preHash).style.display = "none";
    this.document.querySelector(curHash).style.display = "block";
});

function onActive(e){
    const pre = document.querySelector("#elements a.active");
    if(pre) {
        pre.classList.remove("active");
    }
    
    e.currentTarget.classList.add("active");
}


function addActiveColor (){
    const aList = document.querySelectorAll("#elements a");
    if(aList) {
        aList.forEach((a) => {a.addEventListener("click", onActive)});
    }
}
addActiveColor();

