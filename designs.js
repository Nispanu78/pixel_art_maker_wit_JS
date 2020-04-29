// Select size and color
const color = document.getElementById('colorPicker');
const canvas = document.getElementById('pixelCanvas');
const $sizePicker = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;


// an event listener is added to listen when a user submits a form
$sizePicker.addEventListener('submit', function(event) {
      // get input data and draw grid
      event.preventDefault();
      let height = document.getElementById('inputWidth').value;
      let width = document.getElementById('inputWidth').value;      
      canvas.firstElementChild.remove();
      // call your building function
      makeGrid(height, width);
    })

// function that builds the grid according to the data submitted by the user
function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        let row = canvas.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
// an event listener is added to listen when a user colors a cell
            cell.addEventListener('click', function (respondToTheClick)  {
                cell.style.backgroundColor = color.value;
            });
        }
    }
}
// // When size is submitted by the user, call makeGrid()
makeGrid(height, width);


