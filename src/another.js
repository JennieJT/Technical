console.log("I'm in another.js displying variables from practice.js: " + a + " " + b);
let c = "another 1";
var d = "another d";
b = "another b global pollution?"
let curHash = window.location.hash;
window.addEventListener("popstate", function (event) {
    let anchor = this.document.location.hash;
    let preHash = curHash;
    curHash = anchor;
    preHash && this.document.querySelector(preHash) && (this.document.querySelector(preHash).style.display = "none");
    if (curHash && this.document.querySelector(curHash)) {
        this.document.querySelector(curHash).style.display = "flex";
        this.document.querySelector(curHash).style.flexDirection = "column";
    }
});

function onActive(e) {
    const pre = document.querySelector("#elements a.active");
    pre && pre.classList.remove("active");

    e.currentTarget.classList.add("active");
}


(function addActiveColor(){
    const aList = document.querySelectorAll("#elements a");
    if (aList) {
        aList.forEach((a) => { a.addEventListener("click", onActive) });
    }
}())




document.getElementById("sonDiv") && (function showBubblingCapturing () {
    /**
     * 
     * @param {MouseEvent} e 
     */
    function handleCapture(e) {
        const text = e.currentTarget.innerText;
        e.preventDefault();
        //e.stopPropagation();
        console.log("Capture in: " + text);
    }
    /**
     * 
     * @param {MouseEvent} e 
     */
    function handleBubble(e) {
        const text = e.currentTarget.innerText;
        console.log("Bubble in: " + text);
        //return false;
        //e.stopPropagation();
    }
    document.getElementById("sonDiv").addEventListener("click", handleCapture, true);
    document.getElementById("sonDiv").addEventListener("click", handleBubble, false);
    document.getElementById("dadDiv").addEventListener("click", handleCapture, true);
    document.getElementById("dadDiv").addEventListener("click", handleBubble, false);
    document.getElementById("grandDiv").addEventListener("click", handleCapture, true);
    document.getElementById("grandDiv").addEventListener("click", handleBubble, false);
}()
)

