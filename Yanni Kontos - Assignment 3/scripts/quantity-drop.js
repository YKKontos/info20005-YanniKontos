/* width of the side navigation */
function openNav() {
    document.getElementById("sidenav").style.width = "400px";
}
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}


// toggle search drop down

function toggleSearch() {
    var e = document.getElementById("search");
    var c = document.getElementById("cattop-bg");
    e.style.display = ((e.style.display!='none') ? 'none' : 'block');
    if (e.style.display == "block"){
        c.style.marginTop = "-80px";
    } else {
        c.style.marginTop = "0px";
      }

}
function toggleSearchProduct() {
    var e = document.getElementById("search");
    var i = document.getElementById("product-img");
    e.style.display = ((e.style.display!='none') ? 'none' : 'block');
    if (e.style.display == "block"){
        i.style.marginTop = "-80px";
    } else {
        i.style.marginTop = "0px";
      }
}


// search enter input key listener 

  var input = document.getElementById("search");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("menu-furniture").click();
  }
});

// bag slider toggle for mobile screens
function openbag() {
  document.getElementById("bagslide").style.height = "100vh";

}

function closebag() {
  document.getElementById("bagslide").style.height = "0px";

}

function togglebag() {
  var element = document.getElementById("bagslide");
  if (element.style.height == "90vh") {
      element.style.height = "0px";

  } else {
      element.style.height = "90vh";

  }
}

// redirects bag.html hrefs to the bag slider on smaller screens

if (screen.width < 768) {
  document.getElementById('baglink').setAttribute('onclick', "togglebag()");

  document.getElementById('baglink').setAttribute('href', "javascript: void(0)");
  

}


if (screen.width < 768) {
  document.getElementById('returnlink').setAttribute('onclick', "togglebag()");

  document.getElementById('returnlink').setAttribute('href', "javascript: void(0)");

}