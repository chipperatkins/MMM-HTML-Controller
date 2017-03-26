$(document).ready(function () {
    generateBtns(module_arr);
    //  $('body').attr('style', 'background-color:black');
    //$('h1').attr('style', 'color:white');
});
var module_arr = ["Weather", "Clock", "Calendar", "News Feed", "Compliments"];

function generateBtns(module_arr) {
    var i = 0;
    module_arr.forEach(function (module) {
        console.log(module);
        var button = document.createElement("button");
        button.innerHTML = module;

        // 2. Append somewhere
        var btnlist1 = document.getElementById('btnlist1');
        var btnlist2 = document.getElementById('btnlist2');
        var btnlist3 = document.getElementById('btnlist3');
        if (i % 3 === 0) {
            btnlist1.innerHTML += '<span class="button-checkbox"><button type="button" class="btn-danger" data-color="primary">' + module + '</button><input type="checkbox" class="hidden" /></span>';
            i += 1;
        } else if (i % 3 === 1) {
            btnlist2.innerHTML += '<span class="button-checkbox"><button type="button" class="btn-danger" data-color="primary">' + module + '</button><input type="checkbox" class="hidden" /></span>';
            i += 1;
        } else {
            btnlist3.innerHTML += '<span class="button-checkbox"><button type="button" class="btn-danger" data-color="primary">' + module + '</button><input type="checkbox" class="hidden" /></span>';
            i++;
        }
        // 3. Add event handler
        button.addEventListener("click", function () {
            alert(module);
        });
    });
}

$(function () {
    $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

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
            } else {
                $button
                    .removeClass('btn-success active ')
                    .addClass('btn-danger');
            }
        }

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
