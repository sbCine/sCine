
document.getElementById("btn_menu").addEventListener("click", open_close_menu);

var side_menu = document.getElementById("menu_side");
var btn_menu = document.getElementById("btn_menu");
var body = document.getElementById("body");

function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu_side_move");
}

if (window.innerWidth < 768) {
    body.classList.add("body_move");
    side_menu.classList.add("menu_side_move");
}

window.addEventListener("resize", function(){

    if (window.innerWidth > 768) {
        body.classList.remove("body_move");
        side_menu.classList.remove("menu_side_move");
    }

    if (window.innerWidth < 768) {
        body.classList.add("body_move");
        side_menu.classList.add("menu_side_move");
    }

});