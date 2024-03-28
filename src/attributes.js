function splitEventHandler(){
    const node = document.querySelector("#eventHandler code");
    const lists =node.innerHTML.split(",");
    node.innerHTML = ""
    lists.forEach(attribute => {
        const child = document.createElement("code");
        child.innerHTML = attribute;
        node.appendChild(child);
        node.appendChild(document.createElement("br"));
    });
    
}

splitEventHandler();
