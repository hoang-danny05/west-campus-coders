console.log('Hello!');

const image = document.getElementById("trident");
const w = document.getElementById("w")
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("true")
            image.classList.add("up");
            w.classList.add("animated");
        } /*else {
            //for if you want it to replay
            console.log("false")
            image.classList.remove("up")
        } */
    })
})

const animate = () => {
    const image = document.querySelectorAll("img.trident");
    for (const item of image) {
        console.log("thing done");
    }
}

// animate();
const element = document.getElementById("checkpoint");
observer.observe(element)
// elements.forEach((element) => observer.observe(element))