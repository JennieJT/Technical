/**
 * 
 * @param {MouseEvent} e 
 */
function handleAMouseOver(e) {

    e.preventDefault();
}
/**
 * 
 * @param {MouseEvent} e 
 */
function handleAClick(e) {
    e.preventDefault();
}

/**
* 
* @param {MouseEvent} e 
*/
function handleAMouseLeave(e) {
    let whitespace = "<br>"
    const text = `------leaving------ ${whitespace} 
    clientX: ${e.clientX} ${whitespace} 
    clientY: ${e.clientY} ${whitespace} 
    movementX: ${e.movementX}${whitespace} 
    movementY: ${e.movementY} ${whitespace}
    offsetX: ${e.offsetX} ${whitespace}
    offsetY: ${e.offsetY} ${whitespace}
    screenX: ${e.screenX} ${whitespace}
    screenY: ${e.screenY} ${whitespace}
    pageX: ${e.pageX} ${whitespace}
    pageY: ${e.pageY} ${whitespace}
    x: ${e.x} ${whitespace}
    x: ${e.x} ${whitespace}
    shiftKey: ${e.shiftKey}
    --------ending---------
    `
    const mouseParameter = document.getElementById("mouseParameter");
    const mouseParameterAll = document.getElementById("mouseParameterAll");
    mouseParameter.style.display = "block";
    mouseParameterAll.style.display = "block";
 
    mouseParameter.innerHTML = text;
    let prev = mouseParameterAll.innerHTML; 
    mouseParameterAll.innerHTML =  prev + `${whitespace} ` + text;
}

/**
* 
* @param {MouseEvent} e 
*/
function handleAMouseMove(e) {
    let whitespace = "<br>"
    const text = `------moving------ ${whitespace} 
    clientX: ${e.clientX} ${whitespace} 
    clientY: ${e.clientY} ${whitespace} 
    movementX: ${e.movementX}${whitespace} 
    movementY: ${e.movementY} ${whitespace}
    offsetX: ${e.offsetX} ${whitespace}
    offsetY: ${e.offsetY} ${whitespace}
    screenX: ${e.screenX} ${whitespace}
    screenY: ${e.screenY} ${whitespace}
    pageX: ${e.pageX} ${whitespace}
    pageY: ${e.pageY} ${whitespace}
    x: ${e.x} ${whitespace}
    x: ${e.x} ${whitespace}
    shiftKey: ${e.shiftKey}
    --------ending---------
    `
    const mouseParameter = document.getElementById("mouseParameter");
    const mouseParameterAll = document.getElementById("mouseParameterAll");
    mouseParameter.style.display = "block";
    mouseParameterAll.style.display = "block";
    mouseParameter.innerHTML = text;
    let prev = mouseParameterAll.innerHTML; 
    mouseParameterAll.innerHTML =  prev + `${whitespace} ` + text;
}

/**
* 
* @param {MouseEvent} e 
*/
function handleAMouseEnter(e) {
    let whitespace = "<br>"
    const text = `------entering------ ${whitespace} 
    clientX: ${e.clientX} ${whitespace} 
    clientY: ${e.clientY} ${whitespace} 
    movementX: ${e.movementX}${whitespace} 
    movementY: ${e.movementY} ${whitespace}
    offsetX: ${e.offsetX} ${whitespace}
    offsetY: ${e.offsetY} ${whitespace}
    screenX: ${e.screenX} ${whitespace}
    screenY: ${e.screenY} ${whitespace}
    pageX: ${e.pageX} ${whitespace}
    pageY: ${e.pageY} ${whitespace}
    x: ${e.x} ${whitespace}
    x: ${e.x} ${whitespace}
    shiftKey: ${e.shiftKey}
    --------ending---------
    `
    const mouseParameter = document.getElementById("mouseParameter");
    const mouseParameterAll = document.getElementById("mouseParameterAll");
    mouseParameter.style.display = "block";
    mouseParameterAll.style.display = "block";
    mouseParameter.innerHTML = text;
    mouseParameterAll.textContent = "";
    mouseParameterAll.innerHTML =  "<br>" + text;
}

(function doNotJump(){
    let allInputs = document.querySelectorAll("#form input");
    allInputs.forEach((input) => {
        input.addEventListener("keydown", (event) => {
            event.key === "Enter" && event.preventDefault();
        } )
    });
})

function handleFormSubmit(){
    const formValues = {};
    let allInputs = document.querySelectorAll("#form input")

    allInputs.forEach((input) => {
    /**
     * @type {HTMLInputElement}
     */
    let tmp = input;
    if(formValues[tmp.name]){
        const valueArr = [...formValues[tmp.name]];
        valueArr.push(tmp.value);
    }
    formValues[tmp.name] = tmp.value;
    });
    console.log("values:" + formValues);
    for(let v in formValues){
        console.log(v + " " + formValues[v]);
    }
}