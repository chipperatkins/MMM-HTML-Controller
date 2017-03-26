var module_arr = ["Weather", "Clock", "Calendar", "News-Feed", "Compliments"];
var updatedMods = [];
$(document).ready(function () {
    generateBtns(module_arr);
    //  $('body').attr('style', 'background-color:black');
    //$('h1').attr('style', 'color:white');
});
var module_arr = ["Weather", "Clock", "Calendar", "News Feed", "Compliments"];

>>>>>>> cfd1bc41fa5a17dd3dd34bc52e881b429b881369
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
            btnlist1.innerHTML += '<span class="button-checkbox"><button type="button" class="btn-danger" data-color="primary" id='+module+'>' + module + '</button><input type="checkbox" class="hidden" /></span>';
            console.log(i);
            i += 1;
        } else if (i % 3 === 1) {
            btnlist2.innerHTML += '<span class="button-checkbox"><button type="button" class="btn-danger" data-color="primary" id='+module+'>'+ module + '</button><input type="checkbox" class="hidden" /></span>';
            console.log(i);
            i += 1;
        } else {
            btnlist3.innerHTML += '<span class="button-checkbox"><button type="button" class="btn-danger" data-color="primary" id='+module+'>' + module + '</button><input type="checkbox" class="hidden" /></span>';
            i += 1;
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

                console.log("a button turned on!")
                for (var i=0; i < module_arr.length; i++){
                  console.log(module_arr[i]);
                  var element = document.getElementById(module_arr[i]);
                  $button.get
                  if (element.classList.contains("btn-success")){//IF the element has a class of btn-success
                    updatedMods.push(module_arr[i]);//append element to updatedMods
                    console.log(updatedMods);//print (updatedMods) to console to see what's there
                    updatedMods = updatedMods.filter( function( item, index, inputArray ) {//filters and updates mod to only one item per selection (ex. can't have two calendars)
                      return inputArray.indexOf(item) == index;
                    });

                  }

                  else{
                    console.log("nothing to be seen here..");
                  }

                }
                var sel = document.getElementById('upperLeft');//send updatedMods to <select><options>
                updatedMods.forEach(function (module) {
                    var opt = document.createElement('option');
                    console.log(module,"pls work");
                    opt.innerHTML = module;
                    opt.value = module;
                    sel.appendChild(opt);
                  });
                  $(".position option").val(function(idx, val) { //supposed to take away duplicates in the dropdown
                    $(this).siblings("[value='"+ val +"']").remove();
                  });

            } else {
                $button
                    .removeClass('btn-success active ')
                    .addClass('btn-danger');
                console.log("a button turned off!");
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
