/*
 * Author: Apache X692 Attack Helicopter
 * Created on: 15/07/2024
 */
function getRowData() {
    let result = "";

    for (let colIndex = 0; colIndex < globals.maxColsGrid; colIndex++)
        result += document.getElementById("i-" + globals.currentRow + colIndex)
            .textContent;

    return result;
}

function clearGrid() {
    for (let rowIndex = 0; rowIndex <= globals.currentRow; rowIndex++) {
        for (let colIndex = 0; colIndex < globals.maxRowsGrid; colIndex++) {
            let element = document.getElementById("i-" + rowIndex + colIndex);

            if (element.classList.contains("bg-success"))
                element.classList.remove("bg-success");
            else if (element.classList.contains("bg-warning"))
                element.classList.remove("bg-warning");

            element.textContent = '';
        }
    }
}

function addLetterToRow(letter) {
    if (globals.currentCursorPosition >= globals.maxColsGrid)
        return;

    document.getElementById(
        "i-" + globals.currentRow + globals.currentCursorPosition
    ).textContent = letter;

    globals.currentCursorPosition++;
}

function handleRowSubmission() {
    if (globals.currentCursorPosition < globals.maxColsGrid) {
        alert("Fill the entire row with letters before submitting.");
        return;
    }

    const predictedWord = getRowData().toLowerCase();
    const actualWord = globals.word;

    if (predictedWord == actualWord) {
        clearGrid();
        globals = resetGlobals();

        alert("Good job, you've won the game because its so easy! 🏆");

        return;
    }

    if (globals.currentRow == globals.maxRowsGrid - 1) {
        alert(`The word was "${actualWord}". Sorry, you lost the game bro. 😿`);

        clearGrid();
        globals = resetGlobals();

        return;
    }

    showRowResults(predictedWord, actualWord);

    globals.currentRow++;
    globals.currentCursorPosition = 0;
}

function showRowResults(predictedWord, actualWord) {
    for (let index = 0; index < globals.maxColsGrid; index++) {
        if (predictedWord[index] == actualWord[index]) {
            changeGridItemBackground("success", index);
        } else if (actualWord.includes(predictedWord[index])) {
            changeGridItemBackground("warning", index);
        }
    }
}

function changeGridItemBackground(color, colIndex) {
    document.getElementById("i-" + globals.currentRow + colIndex).classList.add(
        "bg-" + color
    );
}

function handleBackButtonEvent() {
    if (globals.currentCursorPosition == 0)
        return;

    document.getElementById(
        "i-" + globals.currentRow + --globals.currentCursorPosition
    ).textContent = '';
}

function renderGrid() {
    let gridContainer = document.getElementById("grid");

    for (let rowIndex = 0; rowIndex < globals.maxRowsGrid; rowIndex++) {
        let newGridRow = document.createElement("div");

        newGridRow.classList.add("d-flex", "flex-row");

        for (let colIndex = 0; colIndex < globals.maxColsGrid; colIndex++) {
            let newGridItem = document.createElement("div");

            newGridItem.classList.add(
                "border", "text-center", "rounded", "m-1", "p-2"
            );
            newGridItem.style.minWidth = "50px";
            newGridItem.style.minHeight = "50px";
            newGridItem.id = "i-" + rowIndex + colIndex;

            newGridRow.appendChild(newGridItem);
        }

        gridContainer.appendChild(newGridRow);
    }
}

renderGrid();
