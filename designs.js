var sizePicker = document.querySelector('sizePicker');
var table = document.querySelector('pixelCanvas');
var height = document.querySelector('inputHeight').value;
var width = document.querySelector('inputWidth').value;
var color = document.querySelector('colorPicker');

// When size is submitted by the user, call makeGrid()
makeGrid(height, width);

// an event listern is added to listen when a user submits a form
sizePicker.addEventListener('click', function (respondToTheClick) {
    respondToTheClick.preventDefault();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
});

// function that builds the grid according to the data submitted by the user.

function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', (respondToTheClick) {
                cell.style.backgroundColor = color.value;
                });
            }
        }
    }
