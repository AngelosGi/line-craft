const gridContain = document.getElementById("gridContainer");
let gridSize = 25;


// function changeGgridSize(newSize){
//         gridSize = newSize
//         createGrid();
// }

// Function to create the grid based on the current gridSize
function createGrid(){

    const boxSize = 70/gridSize;

    for (let rowIndex=0; rowIndex<gridSize; rowIndex++){
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");

        for(let columnIndex=0; columnIndex<gridSize; columnIndex++){
        const newCol = document.createElement("div");
        newCol.classList.add("grid-col-box");
        newCol.style.height = `${boxSize}vw`; // Set the height and width of the grid box based on boxSize
        newCol.style.width = `${boxSize}vw`;
        
        newCol.addEventListener("mouseover", function(){
            newCol.style.backgroundColor = "black";

        });

        newRow.appendChild(newCol);

        }   

        gridContain.appendChild(newRow);
    }

}
    
    createGrid();