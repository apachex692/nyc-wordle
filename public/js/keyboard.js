/*
 * Author: Apache X692 Attack Helicopter
 * Created on: 15/07/2024
 */
const keyboardRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '⬅️'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '➡️']
];

function renderKeyboard() {
    const keyboardContainer = document.getElementById("keyboard");

    for (let keyboardRowIndex = 0; keyboardRowIndex < 3; keyboardRowIndex++) {
        let newKeyboardRow = document.createElement("div");

        newKeyboardRow.classList.add("d-flex", "flex-row", "flex-wrap");

        keyboardRows[keyboardRowIndex].forEach(function (value) {
            let newKey = document.createElement("div");

            newKey.classList.add("btn", "btn-secondary", "m-1");
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

    if (elementClicked.textContent == "➡️") {
        handleRowSubmission();
        return;
    }

    if (elementClicked.textContent == "⬅️") {
        handleBackButtonEvent();
        return;
    }

    if (globals.currentCursorPosition == 5)
        return;

    addLetterToRow(elementClicked.textContent);
}

function handleKeyboard(event) {
    const key = event.key;

    if (key == "Enter") {
        handleRowSubmission();
        return;
    }

    if (key == "Backspace") {
        handleBackButtonEvent();
        return;
    }

    if (key.length != 1)
        return;

    if (globals.currentCursorPosition == 5)
        return;

    addLetterToRow(key.toUpperCase());
}

renderKeyboard();

document.getElementById("keyboard")
    .addEventListener("click", handleKeyboardClick);

document.addEventListener("keydown", handleKeyboard);
