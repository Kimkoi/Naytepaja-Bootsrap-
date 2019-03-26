
	var carousel = $(".carousel"),
    currdeg  = 0;

var rotate = document.createElement('rotate');
rotate.innerHTML =
	'.some-element {' +
		'color: purple;' +
		'background-color: #e5e5e5;' +
		'height: 150px;' +
	'}';
	

$(".next").on("click", rotate_next);
$(".prev").on("click", rotate_prev);

//$(".next").onclick(rotate_next); 
//$(".next").onclick(rotate_prev);

function rotate_next(){
  
    currdeg = currdeg - 60;
  }
function rotate_prev(){
    currdeg = currdeg + 60;
  }

  .a,.b,.c,.d,.e,.f.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}