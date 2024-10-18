function comedia() {
    let campoEdad = document.getElementById('edadUsuario').value;
    let tituloPelicula = document.getElementById('titulo');
    let descripcionPelicula = document.getElementById('descripcion');

    if (campoEdad >= 1 && campoEdad <= 12) {
        tituloPelicula.innerHTML = 'Back to the Future';
        descripcionPelicula.innerHTML = 
            'Un joven llamado Marty McFly es enviado accidentalmente 30 años atrás en el tiempo. En el pasado, se encuentra con versiones más jóvenes de sus padres y debe asegurarse de que se enamoren, de lo contrario, su existencia estará en peligro. Con la ayuda del excéntrico Dr. Emmett Brown, Marty intenta reparar la línea del tiempo mientras encuentra una manera de regresar al presente.';
    } else if (campoEdad >= 13 && campoEdad <= 15) {
        tituloPelicula.innerHTML = 'The Truman Show';
        descripcionPelicula.innerHTML = 
            'Truman Burbank ha vivido toda su vida en un tranquilo pueblo costero... o al menos eso cree. Sin saberlo, ha sido el protagonista de un reality show gigantesco desde su nacimiento. Todo lo que lo rodea –su familia, amigos e incluso su esposa– es falso. A medida que comienza a notar extrañas coincidencias, Truman se embarca en una odisea para descubrir la verdad y escapar de su prisión televisada.';
    } else if (campoEdad >= 16) {
        tituloPelicula.innerHTML = 'The Wolf of Wall Street';
        descripcionPelicula.innerHTML = 
            'Basada en hechos reales, esta película narra la vertiginosa vida de Jordan Belfort, un ambicioso corredor de bolsa que construye un imperio financiero utilizando métodos cuestionables. Rodeado de lujos, excesos, y caos, Belfort pierde el control de su vida mientras intenta mantener su fortuna a toda costa. Es una historia de ambición desmedida y la búsqueda sin límites de la riqueza.';
    }
}

function crimen() {
    let campoEdad = document.getElementById('edadUsuario').value;
    let tituloPelicula = document.getElementById('titulo');
    let descripcionPelicula = document.getElementById('descripcion');

    if (campoEdad >= 1 && campoEdad <= 12) {
        tituloPelicula.innerHTML = 'No hay películas disponibles';
        descripcionPelicula.innerHTML = 
            'Las películas de crimen no son adecuadas para menores de 13 años. Sin embargo, recomendamos explorar otros géneros con historias más apropiadas para esta edad.';
    } else if (campoEdad >= 13 && campoEdad <= 15) {
        tituloPelicula.innerHTML = 'El Secreto de sus Ojos';
        descripcionPelicula.innerHTML = 
            'Un inspector de justicia jubilado, obsesionado con un antiguo caso de asesinato, decide escribir una novela basada en el crimen que nunca logró resolver del todo. A medida que investiga, revive los momentos más intensos de su carrera y reaviva un amor no correspondido que había dejado atrás. La búsqueda de respuestas lo lleva a descubrir secretos impactantes sobre la justicia y la pasión.';
    } else if (campoEdad >= 16) {
        tituloPelicula.innerHTML = 'The Godfather';
        descripcionPelicula.innerHTML = 
            'La historia épica de la familia Corleone, una poderosa organización criminal en Nueva York. A través de la figura de Don Vito Corleone y sus hijos, se explora la compleja red de alianzas, traiciones y rivalidades que sostienen su imperio. La lucha por el poder pone a prueba la lealtad de los miembros de la familia, mientras los Corleone intentan mantener su legado en un mundo en constante cambio.';
    }
}

function drama() {
    let campoEdad = document.getElementById('edadUsuario').value;
    let tituloPelicula = document.getElementById('titulo');
    let descripcionPelicula = document.getElementById('descripcion');

    if (campoEdad >= 1 && campoEdad <= 12) {
        tituloPelicula.innerHTML = 'Casablanca';
        descripcionPelicula.innerHTML = 
            'Ambientada en la Segunda Guerra Mundial, esta película sigue la historia de Rick Blaine, un exiliado estadounidense que administra un club nocturno en Casablanca, Marruecos. Todo cambia cuando se reencuentra con Ilsa, una mujer del pasado, ahora casada con un líder de la resistencia. Rick debe decidir entre su amor por Ilsa y ayudar a su esposo a escapar de los nazis, cambiando así el curso de la historia.';
    } else if (campoEdad >= 13 && campoEdad <= 15) {
        tituloPelicula.innerHTML = 'The Shawshank Redemption';
        descripcionPelicula.innerHTML = 
            'Andy Dufresne, un banquero condenado injustamente por el asesinato de su esposa, es enviado a la prisión de Shawshank. Durante su encarcelamiento, forma una inesperada amistad con Red, un veterano recluso. Mientras soporta las duras condiciones de la prisión, Andy encuentra esperanza y propósito, planeando en secreto su escape durante años.';
    } else if (campoEdad >= 16) {
        tituloPelicula.innerHTML = 'Taxi Driver';
        descripcionPelicula.innerHTML = 
            'Travis Bickle, un exmarine solitario, trabaja como taxista nocturno en Nueva York. A medida que su desilusión con la sociedad crece, se obsesiona con limpiar la ciudad de la corrupción. Su espiral hacia la violencia culmina en un intento desesperado por salvar a una joven prostituta, buscando redimirse a través de un acto de brutalidad final.';
    }
}

function musical() {
    let campoEdad = document.getElementById('edadUsuario').value;
    let tituloPelicula = document.getElementById('titulo');
    let descripcionPelicula = document.getElementById('descripcion');

    if (campoEdad >= 1 && campoEdad <= 12) {
        tituloPelicula.innerHTML = 'La La Land';
        descripcionPelicula.innerHTML = 
            'Mia, una aspirante a actriz, y Sebastian, un pianista de jazz, se enamoran mientras persiguen sus sueños en Los Ángeles. Su historia de amor florece entre audiciones fallidas y conciertos olvidados, pero la presión de alcanzar el éxito comienza a poner a prueba su relación. Ambos deberán elegir entre su amor y sus aspiraciones profesionales.';
    } else if (campoEdad >= 13 && campoEdad <= 15) {
        tituloPelicula.innerHTML = 'Los Miserables';
        descripcionPelicula.innerHTML = 
            'Ambientada en la Francia revolucionaria del siglo XIX, esta historia sigue a Jean Valjean, un exconvicto que intenta rehacer su vida mientras es perseguido implacablemente por el inspector Javert. A través de sacrificios, amor y redención, los personajes navegan por tiempos turbulentos que pondrán a prueba sus ideales y esperanzas.';
    } else if (campoEdad >= 16) {
        tituloPelicula.innerHTML = 'The Rocky Horror Picture Show';
        descripcionPelicula.innerHTML = 
            'Una pareja recién comprometida busca ayuda tras quedarse varada en medio de la noche, solo para encontrarse en un castillo habitado por el extravagante Dr. Frank-N-Furter. En este musical de culto, los protagonistas son arrastrados a un mundo de libertinaje, experimentos científicos y aventuras surrealistas que desafían todas las normas.';
    }
}
