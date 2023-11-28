const gridContain = document.getElementById("gridContainer");
let gridSize = 15;

    for (let rowIndex=0; rowIndex<gridSize; rowIndex++){
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");

        for(let columnIndex=0; columnIndex<gridSize; columnIndex++){
        const newCol = document.createElement("div");
        newCol.classList.add("grid-col-box");
        newRow.appendChild(newCol);

    }   

        gridContain.appendChild(newRow);
}




