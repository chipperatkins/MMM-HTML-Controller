$(function () {
    function getObjectKeyIndex(obj, keyToFind) {
        var i = 0,
            key;

        for (key in obj) {
            if (key == keyToFind) {
                return key;
            }

        }

        return null;
    }

    function translate() {
        var dict = {
            "MMM-HTML-Controller": "MMM-HTML-Controlador",
            "alert": "alerta",
            "updatenotification": "Notificación de actualización",
            "clock": "reloj",
            "calendar": "calendario",
            "compliments": "complementos",
            "currentweather": "clima actuala",
            "weatherforecast": "pronóstico del tiempo",
            "newsfeed": "noticias",
            "upperLeft": "Arriba a la izquierda",
            "upperCenter": "Centro de Alto",
            "upperRight": "Superior derecha",
            "lowerLeft": "Abaja a la izquierda",
            "lowerCenter": "Parte inferior central",
            "lowerRight": "Inferior derecha",
            "MAGIC MIRROR CONSOLE": "Espejo Mágico Consola"
        };
        var buttons = document.getElementsByTagName('button');

        var options = [];
        options = document.getElementsByTagName('option');
        console.log(options[0]);
        for (i = 0; i < options.length; i += 1) {
            var id = options[i].parentElement.parentElement.getAttribute('id');

            var x = getObjectKeyIndex(dict, id);
            options[i].innerHTML = dict[x];
        }
        console.log(buttons[0]);
        for (i = 0; i < buttons.length; i += 1) {
            var id = buttons[i].getAttribute('id');

            var x = getObjectKeyIndex(dict, id);
            buttons[i].innerHTML = dict[x];
        }
        var title = document.getElementById('title');
        console.log(title);
        title.innerHTML = dict[title.innerHTML];

    }
    document.getElementById('spanish').onclick = function () {
        translate();
    };
});
