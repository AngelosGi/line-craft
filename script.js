// Get the grid container element by its ID
const gridContain = document.getElementById("gridContainer");
//initial gridSize
let gridSize = 30;
// let mode = "clasic";
let mode = "rainbow";


document.getElementById("gridSizeButton").onclick = changeGgridSize;
document.getElementById("reset").onclick = createGrid;
document.getElementById("classic").onclick = setClassicMode;
document.getElementById("rainbow").onclick = setRainbowMode;



// Function to change the grid size
function changeGgridSize(newSize){
        newSize = prompt("Pixels")
        gridContain.textContent = "";
        gridSize = newSize
        createGrid();
};

function setClassicMode(){
    mode = "classic";
};

function setRainbowMode(){
    mode = "rainbow";
};


// Function to create the grid based on the current gridSize
function createGrid(){
    //Calculate the size of each grid box based on the gridSize and deletes previous grid
    const boxSize = 40/gridSize;
    gridContain.textContent = "";

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
           
            if (mode === "classic") {
                 newCol.style.backgroundColor = "black";

            }else {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                newCol.style.backgroundColor = "#" + randomColor;
            }

        });
        // Append the grid box to the current row
        newRow.appendChild(newCol);

        }   
        // Append the current row to the grid container
        gridContain.appendChild(newRow);
    }

};

createGrid();

