// Variables
let numero1 = document.querySelector ("input[type='number']")
let texto1 = document.querySelector (".texto1")// variable color
let color1 = document.querySelector (".color1")
let price = 740000
let result = document.querySelector (".result")
let quantity = document.querySelector (".quantity")
let finalcolor = document.querySelector (".finalcolor")

color1.addEventListener("change", function (){ 
    texto1.value = color1.value;
})

function calculator(){
    const { value: cantidad } = numero1
    let total = (+ cantidad * price);
    result.innerHTML= parseInt (total);
    console.log (total, cantidad);
    quantity.innerHTML= cantidad;
    finalcolor.style.backgroundColor=texto1.value;
}
