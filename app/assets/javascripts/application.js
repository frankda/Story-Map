// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require map
//= require popper
//= require bootstrap-sprockets
//= require_tree .




// $(document).ready(function(){
//     MutationObserver = window.MutationObserver;
//     var observer = new MutationObserver(function(mutations, observer) {
//     // fired when a mutation occurs
//         $('#create-favorite').on('click', function(){
//             alert('working');
//         });
//     // ...
// });

// observer.observe(document, {
//     subtree: true,
//     childList: true,
//     //...
//   });
// })

$(document).ready(function(){
    a = document.querySelector('body')
    a.addEventListener('DOMSubtreeModified', function(){
        $('#create-favorite').on('click', function(){
            alert('working');
        });
    });
});
