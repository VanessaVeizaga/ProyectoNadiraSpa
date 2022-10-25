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
    let portada = document.getElementById("portada")
    if (portada != null) {
        portada.remove()
    }
    let titulo = document.getElementById("titulo")
    titulo.innerHTML = "<h3>Masajes corporales</h3>"
    let imagen = document.getElementById("imagen")
    imagen.innerHTML = '<img src="../media/Beauty/masajesCorporales.jpg" alt="Mujer recibiendo masajes corporales">'
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML = `
    <ul>
        <li class="subtitulo">Masajes relajantes</li>
            <p>Es un masaje enfocado en las zonas corporales donde generalmente se acumula tensión 
            muscular como lo es la espalda y cuello, además de buscar el estado de relajación y salud 
            mental en la persona que se le es aplicado.</p>
        <li class="subtitulo">Masajes descontracturantes</li>
            <p>Un masaje descontracturante es un tipo de masaje que tiene como objetivo liberar los 
            músculos y las articulaciones para ayudarlos a funcionar en su nivel óptimo. El propósito 
            del masaje es relajar y aflojar los músculos rígidos y tensos.</p>
        <li class="subtitulo">Masajes Holisticos</li>
            <p>El masaje holístico es una técnica que consiste en tratar el cuerpo y la mente como un todo. 
            La palabra ‘holos’ proviene del griego y se puede traducir como ‘todo’. conecta todos los aspectos
             que componen al ser humano: cuerpo, mente, alma y espíritu. Todos se contemplan como un todo, 
             buscando alcanzar un equilibrio natural en zonas estratégicas en las que habitualmente se 
             concentra la tensión, como el cuello, la espalda, la cabeza y los brazos.</p>
    </ul>`    
}

function masajesFaciales() {
    colorTextoBotones("Masajes faciales")
    let portada = document.getElementById("portada")
    if (portada != null) {
        portada.remove()
    }
    let titulo = document.getElementById("titulo")
    titulo.innerHTML = "<h3>Masajes faciales</h3>"
    let imagen = document.getElementById("imagen")
    imagen.innerHTML = '<img src="../media/Beauty/masajesFaciales.png" alt="Mujer recibiendo masajes faciales">'
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML = `
    <p>El masaje facial es un tratamiento de belleza que abarca un conjunto de técnicas 
    basadas en manipulaciones manuales sobre el cutis. Por lo general, se realizan pequeños 
    movimientos sobre el rostro, aplicando diferentes grados de intensidad, superficial o profunda</p>`
}

function unasEsculpidas() {
    colorTextoBotones("Uñas esculpidas")
    let portada = document.getElementById("portada")
    if (portada != null) {
        portada.remove()
    }
    let titulo = document.getElementById("titulo")
    titulo.innerHTML = "<h3>Uñas esculpidas</h3>"
    let imagen = document.getElementById("imagen")
    imagen.innerHTML = '<img src="../media/Beauty/unasEsculpidas.jpg" alt="Uñas esculpidas">'
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML = `
    <p>Técnica donde lo que se hace es “esculpir” una uña artificial sobre la uña natural, 
    fijándola con luz ultravioleta. Luego se puede esmaltar sobre dicha uña con esmalte común o 
    semipermanente y aplicar diferentes tipos de diseños y/o decoraciones.</p>`
}

function bellezaDePies() {
    colorTextoBotones("Belleza de pies")
    let portada = document.getElementById("portada")
    if (portada != null) {
        portada.remove()
    }
    let titulo = document.getElementById("titulo")
    titulo.innerHTML = "<h3>Belleza de pies</h3>"
    let imagen = document.getElementById("imagen")
    imagen.innerHTML = '<img src="../media/Beauty/bellezaDePies.jpg" alt="Uñas esculpidas">'
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML =`
    <p>Consiste en el arreglo de las uñas, donde se cortan, se liman y se dan forma a la uñas. 
    También se empujan, se limpian y se cortan las cutículas. Para finalizar se realiza el esmaltado en gel.</p>`
}

function bellezaDeManos() {
    colorTextoBotones("Belleza de manos")
    let portada = document.getElementById("portada")
    if (portada != null) {
        portada.remove()
    }
    let titulo = document.getElementById("titulo")
    titulo.innerHTML = "<h3>Belleza de manos</h3>"
    let imagen = document.getElementById("imagen")
    imagen.innerHTML = '<img src="../media/Beauty/bellezaDeManos.jpg" alt="Uñas esculpidas">'
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML = `
    <p>Un tratamiento completo para el cuidado y belleza de las manos, con el que se consigue lucir una uña arreglada, 
    desde el limado, el arrastre de la cutícula y el maquillado. También supone una hidratación profunda de las manos 
    que permite recuperar su frescura y suavidad.</p>`
}

function maquillajeSocial() {
    colorTextoBotones("Maquillaje social")
    let portada = document.getElementById("portada")
    if (portada != null) {
        portada.remove()
    }
    let titulo = document.getElementById("titulo")
    titulo.innerHTML = "<h3>Maquillaje social</h3>"
    let imagen = document.getElementById("imagen")
    imagen.innerHTML = '<img src="../media/Beauty/maquillajeSocial.jpg" alt="Uñas esculpidas">'
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML = `
    <p>Para el maquillaje social destacás los rasgos de la cara y tapás imperfecciones, ya que se trata de dejar a
     la persona más bella de lo que es. Se usa para 15 años, novias, madrinas</p>`
}

function platinumCard() {
    colorTextoBotones("PLATINUM CARD")
    let portada = document.getElementById("portada")
    if (portada != null) {
        portada.remove()
    }
    let titulo = document.getElementById("titulo")
    titulo.innerHTML = "<h3>PLATINUM CARD</h3>"
    let imagen = document.getElementById("imagen")
    imagen.innerHTML = '<img src="../media/Beauty/platinumCard.jpg" alt="Uñas esculpidas">'
    let descripcion = document.getElementById("descripcion")
    descripcion.innerHTML = `
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


