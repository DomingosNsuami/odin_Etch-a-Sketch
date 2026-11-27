const gridContainer = document.querySelector(".gridContainer");
const renderButton = document.querySelector("#renderButton")
const size = 16;

function creatGrid(side){
  gridContainer.innerHTML = "";
  totalSquare = side * side;
  for (let i = 0; i < totalSquare; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `calc(100%/${side})`
    square.style.height = `calc(100%/${side})`

    square.addEventListener("mouseenter",()=>{
      square.style.backgroundColor = generateRandomColor()

      let actualOpacity = Number(square.style.opacity);
      if(actualOpacity < 1){
        square.style.opacity = actualOpacity + 0.1;
      }
    })

    gridContainer.appendChild(square);
    
  }
}

function generateRandomColor() {
   const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color
}
creatGrid(size)

renderButton.addEventListener("click",()=>{
  const resize = prompt("Enter What size should the grid be ( 16 to 100 squares per side)?");
  const newSize = Number(resize);

  if(newSize < 16 || newSize > 100) return;
  else {creatGrid(newSize)}
  

}) 