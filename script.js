// Get the modal
let modal = document.getElementById("myModal");

function showImage(image) {
  let modalImg = document.getElementById("modalImage");
  let captionText = document.getElementById("caption");
  
  modal.style.display = "block";
  modalImg.src = image.src;
  captionText.innerHTML = image.alt;

}



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks the hamburger menu icon, shows the mobile navigation
function openDropDown() {
  let links = document.getElementById("links");
  if (links.style.visibility === "visible") {
    links.style.visibility = "collapse";
  } else {
    links.style.visibility = "visible";
  }
}