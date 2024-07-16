/*
 * Author: Apache X692 Attack Helicopter
 * Created on: 15/07/2024
 */
const keyboardRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', "BACK"],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', "ENTER"]
];

function renderKeyboard() {
    const keyboardContainer = document.getElementById("keyboard");

    for (let keyboardRowIndex = 0; keyboardRowIndex < 3; keyboardRowIndex++) {
        let newKeyboardRow = document.createElement("div");

        newKeyboardRow.classList.add("d-flex", "flex-row");

        keyboardRows[keyboardRowIndex].forEach(function (value) {
            let newKey = document.createElement("div");

            newKey.classList.add("btn", "btn-success", "m-1");
            newKey.textContent = value;
            newKey.style.minWidth = "40px";
            newKey.id = 'k';

            newKeyboardRow.appendChild(newKey);
        });

        keyboardContainer.appendChild(newKeyboardRow);
    }
}

function handleKeyboardClick(event) {
    const elementClicked = event.target;

    if (elementClicked.id != 'k')
        return;

    if (elementClicked.textContent == "ENTER") {
        handleRowSubmission();
        return;
    }

    if (elementClicked.textContent == "BACK") {
        handleBackButtonEvent();
        return;
    }

    if (globals.currentCursorPosition == 5)
        return;

    addLetterToRow(elementClicked.textContent);
}

renderKeyboard();

document.getElementById("keyboard")
    .addEventListener("click", handleKeyboardClick);
