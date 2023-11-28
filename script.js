const gridContain = document.getElementById("gridContainer");
let gridSize = 20;


// function changeGgridSize(newSize){
//         gridSize = newSize
//         createGrid();
// }


function createGrid(){

    const boxSize = 70/gridSize;

    for (let rowIndex=0; rowIndex<gridSize; rowIndex++){
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");

        for(let columnIndex=0; columnIndex<gridSize; columnIndex++){
        const newCol = document.createElement("div");
        newCol.classList.add("grid-col-box");
        newCol.style.height = `${boxSize}vw`;
        newCol.style.width = `${boxSize}vw`;

        newRow.appendChild(newCol);

        }   

        gridContain.appendChild(newRow);
    }

}
    
    createGrid();