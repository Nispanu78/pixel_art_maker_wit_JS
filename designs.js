// Select size and color
let color = document.getElementById('colorPicker');
let canvas = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;


// an event listener is added to listen when a user submits a form
sizePicker.addEventListener('click', function (event) {
    event.preventDefault();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    canvas.firstElementChild.remove();
    makeGrid(height, width);
});

// function that builds the grid according to the data submitted by the user
function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        let row = canvas.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
// an event listern is added to listen when a user colors a cell
            cell.addEventListener('click', function (respondToTheClick)  {
                cell.style.backgroundColor = color.value;
            });
        }
    }
}
// // When size is submitted by the user, call makeGrid()
makeGrid(height, width);

