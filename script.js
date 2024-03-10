// Get the modal
let modal = document.getElementById("myModal");

function showImage(image) {
  let modalImg = document.getElementById("modalImage");
  let captionText = document.getElementById("caption");

  /**
  Pidetään tää tässä ja mietitään myöhemmin
  
  let imageName = image.src.replace(/^.*[\\\/]/, '').split(".");
  let filepath = "images/imagesHD/" + imageName[0]+"HD." + imageName[1];
  
  console.log(filepath);
  */

  modal.style.display = "block";
  modalImg.src = image.src;
  captionText.innerHTML = image.alt;

}



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

function openDropDown() {
  let links = document.getElementById("links");
  let section = document.getElementById("section");
  if (links.style.visibility === "visible") {
    links.style.visibility = "collapse";
    section.style.top = "0vh";
  } else {
    links.style.visibility = "visible";
    section.style.top = "8vh";
  }
}