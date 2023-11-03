const title = document.querySelector("h1")
title.style.textDecoration = "underline"

let gridAmount = 16

const etchContainer = document.querySelector("#etch-container")
etchContainer.style.backgroundColor = "grey"

for (i = 1; i <= gridAmount ; i++) {
    let newColumn = document.createElement("div")
    newColumn.setAttribute("class", "column")

    for (j = 1; j <= gridAmount ; j++) {
        let newCell = document.createElement("div")
        newCell.setAttribute("class","cell")
        newColumn.appendChild(newCell)
    }
    etchContainer.appendChild(newColumn)
}

const cells = document.querySelectorAll(".cell")

cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "white"
    })
})
