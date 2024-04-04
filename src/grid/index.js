(function () {
    let peopleInfo = [
        {
            id: generateUniqueId(),
            name: "Matt",
            age: 24,
            sex: "M",
            interests: ["HTML"]
        }
    ];
    render();
    function generateUniqueId() {
        return Math.floor(Math.random() * 1000000000).toString(36) + Date.now().toString(36);
    }
    //page rendering
    function render() {
        const table = document.getElementById("renderPeopleToTable");
        let htmlContent = "";
        for (let person of peopleInfo) {
            htmlContent += `
             <tr >
            <th scope="row"">
            <input type="checkbox" name ="selectPeopleCheckbox" id="${person.id}">
            </th>
            <td>${person.name}</td>
            <td>${person.age}</td>
            <td>${person.interests.join(", ")}</td>
            <td>${person.sex}</td>
            </tr>`;

        }
        table.innerHTML = htmlContent;
    }
    //make sure all the line for info of a person has been filled.
    function storeInfo(person) {
        const name = document.querySelector('input[name="namePerson"]').value;
        const sex = document.querySelectorAll('input[name="sexPerson"]:checked');
        const age = document.querySelector('input[name="numberPerson"]').value;
        const interests = document.querySelectorAll('input[name="interestsPerson"]:checked')
        if(name && sex && age){
            person.name = name;
            person.sex = sex[0].value;
            person.age = age;
            person.interests = Array.from(interests).map((interest) => interest.value);
        }else{
            alert("Please fill all the lines first!");
        }
    }

    function addPeopleInfo() {
        const person = {};
        person.id = generateUniqueId();
        storeInfo(person);
        peopleInfo.push(person);
    };

    function deletePeopleInfo() {
        const deletePeople = document.querySelectorAll('input[name = "selectPeopleCheckbox"]:checked');
        const deleteIds = Array.from(deletePeople).map((p) => p.id);
        let deletePeopleInfo = peopleInfo.filter((p) => deleteIds.includes(p.id));
        deleteNames = Array.from(deletePeopleInfo).map((person) => person.name).join(", ");
        confirm(`Are you sure you want to delete ${deleteNames}?`) && (peopleInfo = peopleInfo.filter((person) => !deleteIds.includes(person.id)));
        // console.log(peopleInfo);
    }
    function editPeopleInfo(editedId) {
        for (let person of peopleInfo) {
            if (person.id === editedId) {
                storeInfo(person);
            }
        }
    }

    //open person form: for adding and editing.
    function doModel() {
        /**
         * @type {HTMLDivElement}
         */
        const dialogModel = document.getElementsByClassName("dialogModel")[0];
        dialogModel.style.display = "block";
        renderDialog();

        function triggerReset() {
            /**
             * @type {HTMLInputElement}
             */
            const b = document.getElementById("resetButton");
            const e = new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
                clientX: 150,
                clientY: 150
            });
            b.dispatchEvent(e);
        }

        function renderDialog() {
            triggerReset();
            if (editedId) {
                person = peopleInfo.filter((p) => p.id === editedId)[0];
                const name = document.querySelector('#addPerson input[name="namePerson"]');
                const number = document.querySelector('#addPerson input[name="numberPerson"]');
                document.querySelector('#addPerson input[name="sexPerson"]');
                name.value = person.name;
                number.value = person.age;
                if (person.sex === "M") {
                    document.querySelector('#addPerson #maleSex').checked = true;
                    document.querySelector('#addPerson #femaleSex').checked = false;
                } else {
                    document.querySelector('#addPerson #femaleSex').checked = true;
                    document.querySelector('#addPerson #maleSex').checked = false;
                }

                for (let interest of person.interests) {
                    document.querySelector(`#addPerson input[value = "${interest}"]`).checked = true;
                }
            }
        }
    }

    let editedId = "";
    function editModel() {
        //1. alert if select multiple or no
        const editedPeople = document.querySelectorAll('input[name = "selectPeopleCheckbox"]:checked');
        if (editedPeople.length != 1) {
            alert("Please only select 1 person to edit!")
        } else {
            //2. identify id & open handleOK() to edit the info
            editedId = editedPeople[0].id
           doModel();
        }
    }
    function deleteModel() {
        const selected = document.querySelectorAll('input[name = "selectPeopleCheckbox"]:checked');
        if (!selected.length) {
            alert("You haven't selected anyone to delete!");
        } else {
            deletePeopleInfo();
        }
    }
    //close form
    function cancelModel() {
        /**
         * @type {HTMLDivElement}
         */
        const dialogModel = document.getElementsByClassName("dialogModel")[0];
        dialogModel.style.display = "none";
    }
    //submit input data
    function handleOK(event) {
        event.preventDefault();
        if (manipulateType === "add") {
            addPeopleInfo();
        } else if (manipulateType === "delete") {
            deletePeopleInfo();
        } else if (manipulateType === "edit") {
            if (!editedId) {
                alert("Warning: Nobody is selected");
            } else {
                editPeopleInfo(editedId);
            }
        }
        render();
        cancelModel();
        editedId = "";
    }
    //reset input without submission
    function handleCancel() {
        if (confirm("Are you sure you want to cancel?")) {
            cancelModel();
        };
    }

    let manipulateType = "";
    //add a row of info
    function addRow() {
        manipulateType = "add"
        doModel();
    }

    //delete the selected row of info
    function deleteRow() {
        manipulateType = "delete";
        deleteModel();
        render();
    }

    //edit the selected row of info
    function editRow() {
        manipulateType = "edit";
        editModel();
    }

    document.getElementById("addRowAnchor").addEventListener("click", addRow);
    document.getElementById("deleteRowAnchor").addEventListener("click", deleteRow);
    document.getElementById("editRowAnchor").addEventListener("click", editRow);
    document.getElementById("confirmButton").addEventListener("click", handleOK);
    document.getElementById("cancelButton").addEventListener("click", handleCancel);

}()
)