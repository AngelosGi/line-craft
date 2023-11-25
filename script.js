const gridContainer = document.getElementById("grid-container")

    for (let i=0; i<16; i++){
    const row = document.createElement("div");
    row.classList.add("grid");


        for(let j=0; j<16; j++){
        const coll = document.createElement("div");
        coll.classList.add("grid");

        row.appendChild(coll)

    }   
    
        gridContainer.appendChild(row);
}




