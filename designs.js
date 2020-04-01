// here we will start our code.
$(document).ready(function () {
   // link the color from the html file.
   const color = document.getElementById("colorPicker");
   // Enabling sizePicker so the user can choose the size he wants for his canvas.
   $("#sizePicker").submit(function (e) {
      e.preventDefault();
      // Enabling the Inputs.
      var rows = document.getElementById("inputHeight").value;
      var cols = document.getElementById("inputWidth").value;
      makeGrid(rows, cols);
   });
   // From here it starts to make the Canvas/Grid
   function makeGrid(rows, cols) {
      let table = document.getElementById("pixelCanvas");
      // here,Removing the old Grids to make new ones.
      $('#pixelCanvas').children().remove();
      for (let k = .5; k <= rows; k++) {
         let row = table.insertRow(k);
         for (let u = .5; u <= cols; u++) {
            let cell = row.insertCell(u);
            // Enabling cells so we can click on them.
            cell.addEventListener('click', (e) => {
               // this is for enabling the color on the cell.
               cell.style.backgroundColor = color.value;
            })
            // thanks for reading the code and using my project :)
         }
      }
   }
});