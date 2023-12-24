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

document.addEventListener("scroll", (event) => {
    //console.log(window.scrollY);
    parallax();
})

parallax();
// window.onload = scrollToCenterImage("focusImage");