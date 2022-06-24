async function perrito() {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var responsejson = await response.json();
    var img = responsejson.message;
    var contenedorPerrito = document.querySelector(".ContenedorPerrito");
    contenedorPerrito.innerHTML = "<img src='" + img + "' alt='perrito' />";
}