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
            "alert": "alerta",
            "updatenotification": "Notificación de actualización",
            "clock": "reloj",
            "calendar": "calendario",
            "compliment": "complemento",
            "currentweather": "clima actuala",
            "weatherforecast": "pronóstico del tiempo",
            "newsfeed": "noticias",
            "upperLeft": "Arriba a la izquierda",
            "upperCenter": "Centro de Alto",
            "upperRight": "Superior derecha",
            "lowerLeft": "Abaja a la izquierda",
            "lowerCenter": "Parte inferior central",
            "lowerRight": "Inferior derecha"
        };
        var buttons = document.getElementsByClassName('button');
        /*
        document.getElementById('upperleft').setAttribute("value", "Arriba a la izquierda");
        document.getElementById('upperCenter').setAttribute("value", "Centro de Alto");
        document.getElementById('upperRight').setAttribute("value", "Superior derecha");
        document.getElementById('lowerLeft').setAttribute("value", "Abajo a la izquierda");
        document.getElementById('upperCenter').setAttribute("value", "Baja Center");
        document.getElementById('upperRight').setAttribute("value", "Inferior derecha");
        */
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

    }
    document.getElementById('spanish').onclick = function () {
        translate();
    };
});
