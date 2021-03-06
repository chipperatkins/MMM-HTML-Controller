var module_arr = [];
module_arr = ["clock", "Clock", "Calendar", "News-Feed", "Compliments"];

function getArr(arr) {
    arr.pop();
    arr.forEach(function (m) {
        m.toLowerCase();
    });
    return arr;
}

var updatedMods = [];

function generateBtns(module_arr) {
    'use strict';
    var i = 0;
    module_arr.forEach(function (module) {
        var button, btnlist1, btnlist2, btnlist3;
        button = document.createElement("button");
        button.innerHTML = module;

        // 2. Append somewhere

        btnlist1 = document.getElementById('btnlist1');
        btnlist2 = document.getElementById('btnlist2');
        btnlist3 = document.getElementById('btnlist3');
        if (i % 3 === 0) {
            btnlist1.innerHTML += '<span class="button-checkbox"><button type="button" class="btn-danger" data-color="primary" id=' + module + '>' + module + '</button><input type="checkbox" class="hidden" /></span>';
            i += 1;
        } else if (i % 3 === 1) {
            btnlist2.innerHTML += '<span class="button-checkbox"><button type="button" class="btn-danger" data-color="primary" id=' + module + '>' + module + '</button><input type="checkbox" class="hidden" /></span>';
            i += 1;
        } else {
            btnlist3.innerHTML += '<span class="button-checkbox"><button type="button" class="btn-danger" data-color="primary" id=' + module + '>' + module + '</button><input type="checkbox" class="hidden" /></span>';
            i += 1;
        }
        // 3. Add event handler
        button.addEventListener("click", function () {
            alert(module);
        });
    });
}

$(function () {
    'use strict';
    $.get("http://localhost:8080/MMM-HTML-Controller/getModules");
    $.get("http://localhost:8080/modules/MMM-HTML-Controller/info/modules.txt", function (data, status, xhf) {
        module_arr = data.split(',');
        module_arr = getArr(module_arr);
        console.log(module_arr);

        generateBtns(module_arr);
        $('body').attr('style', 'background-color:black');
        $('h1').attr('style', 'color:white');
        $('button').attr('style', 'margin-bottom:40px');
        $('#btnlist1').addClass("col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 vspace");
        $('#btnlist2').addClass("col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 vspace");
        $('#btnlist3').addClass("col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 vspace");
        $('select').addClass("col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4");

        $('.button-checkbox').each(function () {

            // Settings
            var $widget = $(this),
                $button = $widget.find('button'),
                $checkbox = $widget.find('input:checkbox'),
                color = $button.data('color'),
                i = 0,
                isChecked,
                element,
                sel,
                settings = {
                    on: {
                        icon: 'glyphicon glyphicon-check'
                    },
                    off: {
                        icon: 'glyphicon glyphicon-unchecked'
                    }
                };

            // Actions
            function updateDisplay() {
                isChecked = $checkbox.is(':checked');
                // Set the button's state
                $button.data('state', (isChecked) ? "on" : "off");

                // Set the button's icon
                $button.find('.state-icon')
                    .removeClass()
                    .addClass('state-icon ' + settings[$button.data('state')].icon);
                // Update the button's color
                if (isChecked) {
                    $button
                        .removeClass('btn-danger')
                        .addClass('btn-success active');
                    module_arr.forEach(function (module) {
                        element = document.getElementById(module);
                        if (element.classList.contains("btn-success")) { // IF the element has a class of btn - success
                            updatedMods.push(module); //append element to updatedMods
                            console.log(updatedMods); //print (updatedMods) to console to see what's there
                            $.get("http://localhost:8080/MMM-HTML-Controller/show" + module);
                            updatedMods = updatedMods.filter(function (item, index, inputArray) { //filters and updates mod to only one item per selection (ex. can't have two calendars)
                                return inputArray.indexOf(item) == index;
                            });

                        } else {
                            console.log("nothing to be seen here..");
                        }

                    });
                    sel = document.getElementById('upperLeft'); //send updatedMods to <select><options>
                    updatedMods.forEach(function (module) {
                        var opt = document.createElement('option');
                        opt.innerHTML = module;
                        opt.value = module;
                        sel.appendChild(opt);
                    });
                    $("option").val(function (idx, val) { //supposed to take away duplicates in the dropdown
                        $(this).siblings("[value='" + val + "']").remove();
                    });

                } else {
                    $button
                        .removeClass('btn-success active ')
                        .addClass('btn-danger');
                    module_arr.forEach(function (module) {

                        element = document.getElementById(module);
                        if (element.classList.contains("btn-danger")) {
                            if (module.indexOf('-') == null) {
                                $.get("http://localhost:8080/MMM-HTML-Controller/hide" + module);
                            } else {
                                var x = module.indexOf('-');
                                module.slice(x, x + 1);
                                $.get("http://localhost:8080/MMM-HTML-Controller/hide" + module);
                            }
                        } else {
                            console.log("nothing to be seen here..");
                        }
                    });

                }

            }
            // Event Handlers
            $button.on('click', function () {
                $checkbox.prop('checked', !$checkbox.is(':checked'));
                $checkbox.triggerHandler('change');
                updateDisplay();
            });
            $checkbox.on('change', function () {
                updateDisplay();
            });
            // Initialization
            function init() {
                updateDisplay();
                // Inject the icon if applicable
                if ($button.find('.state-icon').length === 0) {
                    $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
                }
            }
            init();
        });
    });
});

function translate() {
    var dict = {
        "alert": "alerta",
        "updatenotification": "Notificación de actualización",
        "clock": "reloj",
        "calendar": "calendario",
        "compliment": "complemento",
        "currentweather": "clima actuala",
        "weatherforecast": "pronóstico del tiempo",
        "newsfeed": "noticias"
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
    options = document.getElementsByTagName('option');
    options.forEach(function (option) {
        var id = option.parentElement.parentElement.getAttribute('id');
        option.innerHTML = dict[id];
    });

}
$("#spanish").on('click', function () {
    translate();
});
