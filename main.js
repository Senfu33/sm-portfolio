function handleScroll() {
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

window.addEventListener("scroll", handleScroll);