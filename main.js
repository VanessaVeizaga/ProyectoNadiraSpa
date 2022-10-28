//Función para cambiar el color del texto de los items de la nav principal

document.body.onload = function() {
    let h1 = document.getElementById("seccion")
    cambiaColorLetra("primarios", h1, "rgb(141, 81, 197)", "rgb(0, 0, 0)")
  }
 
//Función para cambiar el color del texto de los items de la nav secundaria
  
function colorTextoBotones(texto) {
    cambiaColorLetra(texto.className, texto, "rgb(141, 81, 197)", "rgb(255, 255, 255)")
}

//---------------------------------------------------------------------------------------

function cambiaColorLetra(claseElem1, elem2, color1, color2) {
    let array = document.getElementsByClassName(claseElem1)
    for(i = 0; i < array.length; i++) {
        if (array[i].innerHTML == elem2.innerHTML) {
            array[i].style.color = color1
        } else {
            array[i].style.color = color2
        }
    }
}

function mostrarContenido(tratamiento) {
    colorTextoBotones(tratamiento)
    let nombreTratamiento = tratamiento.innerHTML
    let portada = document.getElementById("portada")
    if (portada != null) {
        portada.remove()
    }
    let contenedor = document.getElementById("tratamientos")
    contenedor.style.border = "ridge 0.5em rgb(219, 179, 219)"
    contenedor.style.boxShadow = "0.5em 0.5em 0.25em rgba(172, 164, 172, 0.699)"
    let titulo = document.getElementById("titulo")
    titulo.innerHTML = nombreTratamiento
    let seccion = document.getElementById("seccion").innerHTML
    console.log(seccion)
    let imagen = document.getElementById("imagen")
    imagen.src = `../media/${seccion.replaceAll(" ", "_").toLowerCase()}/${nombreTratamiento.replaceAll(" ", "_").toLowerCase()}.jpg` 
    imagen.alt = nombreTratamiento
    imagen.style.border = "0.25em solid rgb(255, 255, 255)"
    let descripcion = document.getElementById("descripcion")
    if (nombreTratamiento == "Masajes corporales") {
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
    } else if (nombreTratamiento == "Masajes faciales") {
        descripcion.innerHTML = `
        <p>El masaje facial es un tratamiento de belleza que abarca un conjunto de técnicas 
        basadas en manipulaciones manuales sobre el cutis.</p> 
        <p>Por lo general, se realizan pequeños 
        movimientos sobre el rostro, aplicando diferentes grados de intensidad, superficial o profunda</p>`
    } else if (nombreTratamiento == "Uñas esculpidas") {
        descripcion.innerHTML = `
        <p>Técnica donde lo que se hace es “esculpir” una uña artificial sobre la uña natural, 
        fijándola con luz ultravioleta. Luego se puede esmaltar sobre dicha uña con esmalte común o 
        semipermanente y aplicar diferentes tipos de diseños y/o decoraciones.</p>`
    } else if (nombreTratamiento == "Belleza de pies") {
        descripcion.innerHTML = `
        <p>Consiste en el arreglo de las uñas, donde se cortan, se liman y se dan forma a la uñas. 
        También se empujan, se limpian y se cortan las cutículas. Para finalizar se realiza el esmaltado en gel.</p>`
    } else if (nombreTratamiento == "Belleza de manos") {
        descripcion.innerHTML = `
        <p>Un tratamiento completo para el cuidado y belleza de las manos, con el que se consigue lucir una uña arreglada, 
        desde el limado, el arrastre de la cutícula y el maquillado.</p> 
        <p>También supone una hidratación profunda de las manos 
        que permite recuperar su frescura y suavidad.</p>`
    } else if (nombreTratamiento == "Maquillaje social") {
        descripcion.innerHTML = `
        <p>Para el maquillaje social destacás los rasgos de la cara y tapás imperfecciones, ya que se trata de dejar a
        la persona más bella de lo que es. Se usa para 15 años, novias, madrinas</p>`
    } else if (nombreTratamiento == "PLATINUM CARD") {
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
        </ul>
        <p>La misma tiene validez de 45 días, y las sesiones deberán realizarse dentro del mes de iniciado el tratamiento.</p>`
    } else if (nombreTratamiento == "Limpieza profunda") {
        descripcion.innerHTML = `
        <p>La limpieza facial profunda es un procedimiento de mantenimiento que elimina todas las impurezas que se 
        encuentran en la piel generadas por el mismo cuerpo y por el ambiente. Estas impurezas son el origen de imperfecciones, 
        acné, arrugas prematuras y pérdida de brillo.</p>
        <p>Entre sus beneficios podemos observar que suaviza la piel, aumenta la luminosidad del rostro, Regula el pH de la piel. 
        Regula la producción de grasa, Elimina y remueve las impurezas y células muertas.</p>`
    } else if (nombreTratamiento == "Peeling") {
        descripcion.innerHTML = `
        <p>El peeling es un tratamiento dermatológico basado en la exfoliación de las capas más superficiales de la piel para favorecer su 
        sustitución por otras de mejor calidad y textura. Se induce así la creación de nuevas capas de la dermis y la epidermis.</p>`

    } else if (nombreTratamiento == "Despigmentante") {
        descripcion.innerHTML = `
        <p>Es una técnica que consiste en aplicar sobre la piel limpia y desengrasada una mascarilla especial llamada también “fórmula magistral”, 
        para la cual se indican diferentes agentes químicos y principios activos con la finalidad de inducir la primera descamación la cual 
        iniciará el proceso inicial de la retirada de la mancha.</p>`
    } else if (nombreTratamiento == "Dermapen Anti-age") {
        descripcion.innerHTML = `
        <p>El microneedling con Dermapen es un tratamiento mínimamente invasivo cuyo objetivo es mejorar la calidad de la piel, estimulando 
        la producción de colágeno y permitiendo que los activos penetren de una forma mucho más profunda.</p>`
    } else if (nombreTratamiento == "Radiofrecuencia facial") {
        descripcion.innerHTML = `
        <p>El tratamiento de radiofrecuencia es muy sencillo, consiste en aplicar calor a la piel a través de una onda electromagnética que 
        aumenta la temperatura a una determinada profundidad. Con ello lo que provocamos es una especie de efecto tensor o efecto lifting para 
        estimular la producción de colágeno o el drenaje de toxinas, lo que permitirá que la piel gane firmeza. </p>`
    } else if (nombreTratamiento == "SILVER CARD") {
        descripcion.innerHTML = `
        <p>Esta tarjeta abarca los siguientes tratamientos</p>
        <ul>
            <li>2 sesiones de tratamiento despigmentante</li>
            <li>1 sesion de peeling</li>
            <li>2 sesiones de Dermapen ant-iage</li>
            <li>1 sesión de limpieza facial profunda</li>
        </ul>
        <p>La misma tiene una validez de 45 días, y el tratamiento deberá realizarse dentro de los 60 días desde la primera sesión.</p>`
    } else if (nombreTratamiento == "Ultracavitación") {
        descripcion.innerHTML = `
        <p>La utracavitación, también conocida como liposucción sin cirugía, consiste en un tratamiento de tipo reductor indoloro de efectos 
        inmediatos, cuyo objetivo es eliminar los depósitos de grasa presentes en el cuerpo sin la necesidad de llevar a cabo un procedimiento 
        quirúrgico.</p> 
        <p>Así, la ultracavitación consigue una modelación en el contorno general del cuerpo a la vez que elimina problemas como la celulitis. 
        Se sirve de los ultrasonidos para llegar a la grasa, eliminarla y que esta posteriormente se elimine por el propio cuerpo.</p>`
    } else if (nombreTratamiento == "Radiofrecuencia corporal") {
        descripcion.innerHTML = `
        <p>El tratamiento de radiofrecuencia es muy sencillo, consiste en aplicar calor a la piel a través de una onda electromagnética que aumenta 
        la temperatura a una determinada profundidad. Con ello lo que provocamos es una especie de efecto tensor o efecto lifting para estimular la 
        producción de colágeno o el drenaje de toxinas, lo que permitirá que la piel gane firmeza.</p> 
        <p>La radiofrecuencia se utiliza para varios fines. Por un lado, produce la contracción de fibras de colágeno, dando lugar al deseado efecto 
        lifting, al mismo tiempo que estimula nuevas fibras de colágeno. </p>`
    } else if (nombreTratamiento == "Ultherapy") {
        descripcion.innerHTML = `
        <p>Ultherapy® utiliza una tecnología de ultrasonido el cual llega más profundo que cualquier otro tratamiento no invasivo también utilizados 
        para la estimulación de colágeno.</p>
        <p>Este procedimiento aprovecha los beneficios tradicionales de la imagen en tiempo real por ultrasonido, de tal forma que los especialistas que 
        utilizan Ultherapy® puedan visualizar las capas del tejido que están tratando. Esto asegura que la energía del tratamiento se enfoque en la zona 
        de la piel del paciente que más lo necesite y en la cuál se tendrán mayores resultados</p>`
    } else if (nombreTratamiento == "Depilación definitiva") {
        descripcion.innerHTML = `
        <p>La Depilación médica se basa en tratar con una luz muy específica (producida por Láser o IPL) en una zona, con el objeto de eliminar el pelo.</p>
        <p>Si el tratamiento es eficaz, y está realizado correctamente bajo supervisión médica, el pelo se elimina de forma permanente.</p>`
    } else if (nombreTratamiento == "Venus Legacy") {
        descripcion.innerHTML = `
        <p>Venus Legacy es un aparato revolucionario que trabaja con el concepto Trim & Tite™ (reduce y reafirma).</p>
        <p>La radiofrecuencia multipolar brinda un calor rápido, sin dolor y homogéneo a varias profundidades del tejido, estimulando la contracción del 
        colágeno, su síntesis y la lipólisis (rotura de las grasas). Los campos magnéticos pulsados, a su vez, promueven la síntesis del colágeno, 
        la proliferación de los fibroblastos y la neo-vascularidad (formación de nuevos vasos sanguíneos).</p> 
        <p>Pero además, una tecnología patentada por Venus Concept (denominada Varipulse™) genera impulsos de succión ajustables que facilitan una 
        penetración profunda de la energía, ayudan al drenaje linfático y estimulan la circulación sanguínea.</p>`
    } else if (nombreTratamiento == "Criolipolisis") {
        descripcion.innerHTML = `
        <p>Es un procedimiento médico estético, no invasivo e indoloro, que sirve para destruir las células grasas exponiéndolas a bajas temperaturas 
        mediante un proceso de succión aplicado sobre la zona afectada</p>`
    } else if (nombreTratamiento == "GOLD CARD") {
        descripcion.innerHTML = `
        <p>Esta tarjeta abarca los siguientes tratamientos:</p>
        <ul>
            <li>4 sesiones de ultracavitación</li>
            <li>4 sesiones  de Venus Legacy</li>
            <li>2 sesiones de criolipolisis</li>
            <li>2 sesiones de radiofrecuencia corporal</li>
        </ul>
        <p>La misma tiene validez de 45 días, y las sesiones deberán realizarse dentro del mes de iniciado el tratamiento.</p>`
    }                    
}   

const formulario = document.getElementById('formulario')
const Name = document.getElementById('name')
const cel = document.getElementById('cel')
const mail = document.getElementById('mail')

formulario.addEventListener("submit", e=> {
    e.preventDefault();

    const regName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regcel = /^ [0 - 9] + $/;
    const regmail= /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    if (!regName.test(Name.value)){
        return console.log("Solo letras");
    } 
    if (!regcel.test(cel.value)){
        return console.log("Solo numeros de telefono");
    } 
    if (!regmail.test(mail.value)){
        return console.log("Formato de mail no valido");
    } 
} 
)
