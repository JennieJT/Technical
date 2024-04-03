(function () {
    let peopleInfo = [
        {
            name: "Matt",
            age: 24,
            sex: "M",
            interests: ["HTML"]
        }
    ];
    function render() {
        const table = document.getElementById("renderPeopleToTable");
        let htmlContent = "";
        for (let person of peopleInfo) {
            htmlContent += `
             <tr >
            <th scope="row">${person.name}</th>
            <td>${person.age}</td>
            <td>${person.interests.join(", ")}</td>
            <td>${person.sex}</td>
            </tr>`;

        }
        table.innerHTML = htmlContent;
    }
    function addPeopleInfo() {
        const person = {};
        person.name = document.querySelector('input[name="namePerson"]').value;
        person.sex = document.querySelectorAll('input[name="sexPerson"]:checked')[0].value;
        person.age = document.querySelector('input[name="numberPerson"]').value;
        const interests = document.querySelectorAll('input[name="InterestsPerson"]:checked')
        person.interests = Array.from(interests).map((interest) => interest.value);
        console.log(person);
        peopleInfo.push(person);

    };

    //!!!!not optimized. Need to discuss deletion rules.!!!!
    function deletePeopleInfo() {
        const deleteName = document.querySelector('input[name="namePerson"]').value;
        const deleteSex = document.querySelectorAll('input[name="sexPerson"]:checked')[0].value;
        const deleteAge = document.querySelector('input[name="numberPerson"]').value;
        const interests = document.querySelectorAll('input[name="InterestsPerson"]:checked')
        const deleteInterests = Array.from(interests).map((interest) => interest.value);
        peopleInfo = peopleInfo.filter((person) => person.name != deleteName);
        //peopleInfo = peopleInfo.filter((person) => person.sex != deleteSex);
        peopleInfo = peopleInfo.filter((person) => person.age != deleteAge);
        peopleInfo = peopleInfo.filter((person) => !person.interests.includes(deleteInterests));
        console.log(peopleInfo);
    }

    function editPeopleInfo() {
        const name = document.querySelector('input[name="namePerson"]').value;
            peopleInfo = peopleInfo.filter((person) => person.name != name);
    }

    //open form
    function doModel() {
        /**
         * @type {HTMLDivElement}
         */
        const dialogModel = document.getElementsByClassName("dialogModel")[0];
        dialogModel.style.display = "block";
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
    function handleOK() {
        if (manipulateType === "add") {
            addPeopleInfo();
        } else if (manipulateType === "delete") {
            deletePeopleInfo();
        } else if (manipulateType === "edit") {
            editPeopleInfo();
        }
        render();
        cancelModel();
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
        doModel();
    }

    //edit the selected row of info
    function editRow() {
        manipulateType = "edit";
        doModel();
    }

    document.getElementById("addRowAnchor").addEventListener("click", addRow);
    document.getElementById("deleteRowAnchor").addEventListener("click", deleteRow);
    document.getElementById("editRowAnchor").addEventListener("click", editRow);
    document.getElementById("confirmButton").addEventListener("click", handleOK);
    document.getElementById("cancelButton").addEventListener("click", handleCancel);

}()
)