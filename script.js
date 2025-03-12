function parallax() {
    var windowHeight = window.innerHeight;
    var elements = document.getElementsByClassName('parallax');
    for (let i=0;i<elements.length;i++) {
        var element = elements[i];
        var rect = element.getBoundingClientRect();
        var offset = 1;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            let upper = parseFloat(element.dataset.upperoffset);
            let lower = parseFloat(element.dataset.loweroffset);
            offset = (((rect.bottom - upper)/(windowHeight + rect.bottom - rect.top - upper - lower))*100).toFixed(2);
            element.setAttribute('style',"object-position: 0 " + offset + "%;");
        }
    }
}

function scrollToCenterImage(imageID) {
    let rect = document.getElementById(imageID).getBoundingClientRect();
    let windowHeight = window.innerHeight;
    window.scrollTo(0,(rect.top + rect.bottom + 2*window.scrollY - windowHeight)/2);
}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
}

document.addEventListener("scroll", (event) => {
    //console.log(window.scrollY);
    parallax();
})

parallax();
// window.onload = scrollToCenterImage("focusImage");