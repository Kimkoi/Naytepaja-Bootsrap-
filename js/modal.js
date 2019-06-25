
function modaliin(kuvanId){
	
	// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
var img = document.getElementById(kuvanId);
var modalImg = document.getElementById("imgInModal");
	
	
    modal.style.display = "block";
    modalImg.src = img.src;
  


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 

}