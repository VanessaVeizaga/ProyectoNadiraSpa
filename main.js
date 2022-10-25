function colorTextoBotones(texto) {
    let botones = document.getElementsByClassName("secundarios")
    for(i = 0; i < botones.length; i++) {
        if (botones[i].innerHTML == texto) {
            botones[i].style.color = "rgb(141, 81, 197)"
        } else {
            botones[i].style.color = "rgb(255, 255, 255)"
        }
    }
}


function masajesCorporales() {
    colorTextoBotones("Masajes corporales")
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML = `<h5>Masajes corporales</h5>
    <ul>
        <li>Masajes relajantes</li>
        <li>Masajes descontracturantes</li>
        <li>Masajes Holisticos</li>
    </ul>`    
}

function masajesFaciales() {
    colorTextoBotones("Masajes faciales")
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML = `<h5>Masajes faciales</h5>
    <p>El masaje facial es un tratamiento de belleza que abarca un conjunto de técnicas 
    basadas en manipulaciones manuales sobre el cutis. Por lo general, se realizan pequeños 
    movimientos sobre el rostro, aplicando diferentes grados de intensidad, superficial o profunda</p>`
}

function unasEsculpidas() {
    colorTextoBotones("Uñas esculpidas")
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML = `<h5>Uñas esculpidas</h5>
    <p>Técnica donde  lo que se hace es “esculpir” una uña artificial sobre la uña natural, 
    fijándola con luz ultravioleta. Luego se puede esmaltar sobre dicha uña con esmalte común o 
    semipermanente y aplicar diferentes tipos de diseños y/o decoraciones.</p>`
}

function bellezaDePies() {
    colorTextoBotones("Belleza de pies")
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML =`<h5>Belleza de pies</h5>
    <p>consiste en el arreglo de las uñas, donde se cortan, se liman y se dan forma a la uñas. 
    También se empujan, se limpian y se cortan las cutículas. Para finalizar se realiza el esmaltado en gel.</p>`
}

function bellezaDeManos() {
    colorTextoBotones("Belleza de manos")
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML = `<h5>Belleza de manos</h5>
    <p>Un tratamiento completo para el cuidado y belleza de las manos, con el que se consigue lucir una uña arreglada, 
    desde el limado, el arrastre de la cutícula y el maquillado. También supone una hidratación profunda de las manos 
    que permite recuperar su frescura y suavidad.</p>`
}

function maquillajeSocial() {
    colorTextoBotones("Maquillaje social")
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML = `<h5>Maquillaje social</h5>
    <p>Para el maquillaje social destacás los rasgos de la cara y tapás imperfecciones, ya que se trata de dejar a
     la persona más bella de lo que es. Se usa para 15 años, novias, madrinas</p>`
}

function platinumCard() {
    colorTextoBotones("PLATINUM CARD")
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML = `<h5>PLATINUM CARD</h5>
    <p>Esta tarjeta comprende los siguientes tratamientos</p>
    <ul>
        <li>4 sesiones de masajes a elección</li>
        <li>2 sesiones de uñas esculpidas</li>
        <li>2 sesiones de belleza de pies y de manos</li>
        <li>4 sesiones de ultracavitación</li>
        <li>4 sesiones de Venus Legacy </li>
        <li>2 sesiones de limpieza facial profunda</li>
        <li>2 sesiones de Dermapen</li>
    </ul>`       
}


