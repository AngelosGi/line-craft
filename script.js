const gridContain = document.getElementById("gridContainer");


    for (let rowIndex=0; rowIndex<16; rowIndex++){
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");

        for(let columnIndex=0; columnIndex<16; columnIndex++){
        const newCol = document.createElement("div");
        newCol.classList.add("grid-col-box");
        newRow.appendChild(newCol);

    }   

        gridContain.appendChild(newRow);
}




