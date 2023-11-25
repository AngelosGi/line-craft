const gridContainer = document.getElementById("grid-container")




    for (let i=0; i<16; i++){
    const row = document.createElement("div");
    row.classList.add("grid");


        for(let j=0; j<16; j++){
        const col = document.createElement("div");
        col.classList.add("grid");

        row.appendChild(col);

    }   

        gridContainer.appendChild(row);
}




