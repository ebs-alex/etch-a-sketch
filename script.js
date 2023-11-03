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
        newCell.style.opacity = 1
        newColumn.appendChild(newCell)
    }
    etchContainer.appendChild(newColumn)
}

const cells = document.querySelectorAll(".cell")

cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        const randColor = randomColor()
        cell.style.backgroundColor = randColor
        cell.style.opacity -= 0.2
    })
})

function randomColor () {
    const value1 = Math.floor(Math.random()*255)
    const value2 = Math.floor(Math.random()*255)
    const value3 = Math.floor(Math.random()*255)

    return `rgb(${value1},${value2},${value3})`

}