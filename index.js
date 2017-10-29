

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

$('.nav > li').hover(function(){
    $(this).parent().css('background-color', '#62D1A2');
});
$('.nav > li').mouseout(function(){
    $(this).parent().css('background-color', '#4BA0A4');
});

$(function  () {
    $("ul.sort").sortable();
  });