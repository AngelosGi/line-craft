const gridContainer = document.getElementById("grid-container")

for (let i=0; i<32; i++){
    const newGrid = document.createElement("div");
    newGrid.classList.add("grid");
    gridContainer.appendChild(newGrid);
}


