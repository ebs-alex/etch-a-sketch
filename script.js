const title = document.querySelector("h1")
title.style.textDecoration = "underline"

const etchContainer = document.querySelector("#etch-container")
etchContainer.style.backgroundColor = "grey"

const resetBtn = document.querySelector("#reset")
resetBtn.addEventListener("click", reset)

const slider = document.querySelector("#slider")
const sliderValueDisplay = document.querySelector("#slider-value")
sliderValueDisplay.textContent = slider.value
slider.oninput = () => {
    sliderValueDisplay.innerHTML = slider.value;
    reset()
  }

let gridAmount = slider.value

renderCells()

const eraser = document.querySelector("#eraser-switch")
// console.log(eraser.checked)

//functions

function renderCells() {
    etchContainer.innerHTML = ''
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
            if (eraser.checked == false) {
                const randColor = randomColor()
                cell.style.backgroundColor = randColor
                cell.style.opacity -= 0.1
            } else {
                cell.style.backgroundColor = "white"
                if (cell.style.opacity < 1.0) {
                    cell.style.opacity =  parseFloat(cell.style.opacity) + 0.1
                }
            }
        })
    })
}

function randomColor () {
    const value1 = Math.floor(Math.random()*255)
    const value2 = Math.floor(Math.random()*255)
    const value3 = Math.floor(Math.random()*255)

    return `rgb(${value1},${value2},${value3})`

}

function reset() {
    eraser.checked = false
    gridAmount = slider.value
    renderCells()
}