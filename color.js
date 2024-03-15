const colorinput =document.getElementById('color-input')
const btngenetrate  = document.getElementById('btn-generate')
const colorpaleete1 = document.getElementById('colorpaleete')


btngenetrate.addEventListener("click", () => {
    let color = colorinput.value.slice(1, 7);
    colorgen(color);
  });

function colorgen(color){
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&format=json`)
    .then((response) => response.json())
    .then((data) => {
        
        });
}

