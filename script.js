function parallax(position) {
    var windowHeight = window.innerHeight;
    var elements = document.getElementsByClassName('parallax');
    for (let i=0;i<elements.length;i++) {
        var rect = elements[i].getBoundingClientRect();
        var compensation = 0;
        var offset = 1;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            compensation = 0;
            if ((rect.top + position) < windowHeight) {
                compensation += windowHeight - rect.top - position;
            }
            offset = (rect.bottom/(rect.bottom - (rect.top + compensation) + windowHeight))*100;
            //console.log(offset);
            elements[i].setAttribute('style',"object-position: 0 " + offset + "%;");
        }

        
        
    }
}

document.addEventListener("scroll", (event) => {
    //console.log(window.scrollY);
    parallax(window.scrollY);
})


