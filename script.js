// Get the grid container element by its ID
const gridContain = document.getElementById("gridContainer");
//initial gridSize
let gridSize = 30;





// Function to change the grid size
function changeGgridSize(newSize){
        gridContain.textContent = "";
        gridSize = newSize
        createGrid();
};

// Function to create the grid based on the current gridSize
function createGrid(){
    //Calculate the size of each grid box based on the gridSize
    const boxSize = 70/gridSize;

    // Loop to create rows
    for (let rowIndex=0; rowIndex<gridSize; rowIndex++){
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");

        // Loop to create columns within each row
        for(let columnIndex=0; columnIndex<gridSize; columnIndex++){
        const newCol = document.createElement("div");
        newCol.classList.add("grid-col-box"); // Add a class to the column for styling
        newCol.style.height = `${boxSize}vw`; // Set the height and width of the grid box based on boxSize
        newCol.style.width = `${boxSize}vw`;
        
        // Add event listener for the hover/change color effect
        newCol.addEventListener("mouseover", function(){

            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            newCol.style.backgroundColor = "#" + randomColor;
            
            // newCol.style.backgroundColor = "black";

        });
        // Append the grid box to the current row
        newRow.appendChild(newCol);

        }   
        // Append the current row to the grid container
        gridContain.appendChild(newRow);
    }

};

createGrid();