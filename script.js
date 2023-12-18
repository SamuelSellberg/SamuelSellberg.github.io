

document.addEventListener('scroll',parallax(evt));

function parallax(evt) {
    var elements = document.getElementsByClassName('parallax');
    for (let i=0;i<elements.length;i++) {
        elements[i].setAttribute('style',"object-position: 0 100%;")
        console.log("Scrolled")
    }
}

document.getElementById("testing").innerHTML = "Yes";

console.log("Testing");