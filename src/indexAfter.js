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
    mouseParameterAll.innerHTML = prev + `${whitespace} ` + text;
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
    mouseParameterAll.innerHTML = prev + `${whitespace} ` + text;
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
    mouseParameterAll.innerHTML = "<br>" + text;
}

(function doNotJump() {
    let allInputs = document.querySelectorAll("#form input");

    allInputs.forEach((input) => {
        input.addEventListener("keydown", (event) => {
            event.key === "Enter" && event.preventDefault();
        })
    });
}())



function handleFormSubmit(e) {
    e.preventDefault()
    const formValues = {};
    let allInputs = document.querySelectorAll("#form input")

    allInputs.forEach((input) => {
        /**
         * @type {HTMLInputElement}
         */
        let tmp = input;

        // check checkbox
        if (tmp.type === "checkbox") {
            if (tmp.checked) {
                if (!formValues[tmp.name]) {
                    formValues[tmp.name] = [];
                }
                formValues[tmp.name].push(tmp.value);
            }
        } else if (tmp.type === "radio") {
            tmp.checked && (formValues[tmp.name] = tmp.value);
        } else if (tmp.type === "submit" || tmp.type === "reset" || tmp.type === "button") {
        } else {
            formValues[tmp.name] = tmp.value;
        }

    });

    //textareas
    const allTextAreas = document.querySelectorAll("#form textarea");
    allTextAreas.forEach((it) => {
        formValues[it.name] = it.value;
    });

    //options
    const allOptions = document.querySelectorAll("#form select");
    allOptions.forEach((it) => {
        formValues[it.name] = it.value;
    });


    console.log("values:" + formValues);
    for (let v in formValues) {
        console.log(v + " " + formValues[v]);
    }

    localforage.setItem('jtFormValues', formValues);
}

function handleFormOnLoad(e) {
    /**
     * @type {object}
     */
    let initData;
    localforage.getItem('jtFormValues').then((it) => {
        initData = it;
        const allInputs = document.querySelectorAll("#form input");
        for (let key in initData) {
            console.log(key + " " + initData[key])
            allInputs.forEach((tmp) => {
                if (tmp.type === "checkbox" && key.toLowerCase().includes("checkbox")) {
                    if(initData[key].includes(tmp.value))
                        tmp.checked = true;
                } else if (tmp.type === "radio" && key.toLowerCase().includes("radio")) {
                    if(tmp.value === initData[key]){
                        tmp.checked = true;
                    }
                } else if (tmp.name === key) {
                    tmp.value = initData[key];
                } else {
                    tmp.value === "";
                   // tmp.checked && (tmp.checked = false);
                }
            });
        }
    });
}