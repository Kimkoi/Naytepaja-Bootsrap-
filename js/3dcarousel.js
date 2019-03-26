var currdeg = 0;

$(function () {
    $(".next").on("click", { d: "n" }, rotate);
    $(".prev").on("click", { d: "p" }, rotate);
});

function rotate(e) {
    //console.log('rotate', e);
    if (e.data.d === "n") {
        currdeg = currdeg - 60;
    }
    if (e.data.d === "p") {
        currdeg = currdeg + 60;
    }
    //console.log(currdeg);
    $(".carousel").css({
        "-webkit-transform": "rotateY(" + currdeg + "deg)",
        "-moz-transform": "rotateY(" + currdeg + "deg)",
        "-o-transform": "rotateY(" + currdeg + "deg)",
        "transform": "rotateY(" + currdeg + "deg)"
    });
}