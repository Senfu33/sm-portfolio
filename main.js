function personalScroll() {
    const imageParagraph = document.querySelector('#paragraph');
    const imagePersonal = document.querySelector('#personal');
    const imagePosition = imageParagraph.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (imagePosition < screenPosition) {
        imageParagraph.style.transform = "translateX(0)";
        imageParagraph.style.opacity = "1";
    } else if (imagePosition > screenPosition) {
        imageParagraph.style.transform = "translateX(-120%)";
        imageParagraph.style.opacity = "0";
    }

    if (imagePosition < screenPosition) {
        imagePersonal.style.transform = "translateX(0)";
        imagePersonal.style.opacity = "1";
    } else if (imagePosition > screenPosition) {
        imagePersonal.style.transform = "translateX(120%)";
        imagePersonal.style.opacity = "0";
    }
}

window.addEventListener("scroll", personalScroll);

function projectsScroll() {

    const imageTitle = document.querySelector('.projects-title');
    const imagePosition = imageTitle.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1;

    if (imagePosition < screenPosition) {
        imageTitle.style.filter = "none"
    } else {
        imageTitle.style.filter = "blur(10px)"
    }
}

window.addEventListener("scroll", projectsScroll);

function descOne() {
    const descOne = document.querySelector('#placeholder1');
    const descPosition = descOne.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1;

    if (descPosition < screenPosition) {
        descOne.style.transform = "translateX(0)";
        descOne.style.opacity = "1";
    } else {
        descOne.style.transform = "translate(120%)";
        descOne.style.opacity = "0";
    }
}

window.addEventListener("scroll", descOne);

function descTwo() {
    const descTwo = document.querySelector('#placeholder2');
    const descPosition = descTwo.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1;

    if (descPosition < screenPosition) {
        descTwo.style.transform = "translateX(0)";
        descTwo.style.opacity = "1";
    } else {
        descTwo.style.transform = "translate(-120%)";
        descTwo.style.opacity = "0";
    }
}

window.addEventListener("scroll", descTwo);

function descThree() {
    const descThree = document.querySelector('#placeholder3');
    const descPosition = descThree.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1;

    if (descPosition < screenPosition) {
        descThree.style.transform = "translateX(0)";
        descThree.style.opacity = "1";
    } else {
        descThree.style.transform = "translate(120%)";
        descThree.style.opacity = "0";
    }
}

window.addEventListener("scroll", descThree);