const artContainer = document.querySelector(".artwork-images-container");
const heroImg = document.querySelector(".hero-img");
const galleryImg = document.querySelector("#gallery");

const artImages = [

    "artwork_01.jpeg",
    "artwork_02.jpeg",
    "artwork_03.jpeg",
    "artwork_01.jpeg",
    "artwork_02.jpeg",
    "artwork_03.jpeg",
    "artwork_01.jpeg",
    "artwork_02.jpeg",
    "artwork_03.jpeg",
    "artwork_01.jpeg",
    "artwork_02.jpeg",
]




function createImgAnim(targetImg, startPercent, endPercent){

    let imgTl = gsap.timeline({
        paused: true,
        defaults: {
            ease:"sine.inOut",
            duration: 0.5
        }
    }
        );

    const styles = getComputedStyle(targetImg);

    imgTl.fromTo(targetImg, {

    backgroundSize: `${startPercent}%`,
    },

    {backgroundSize: `${endPercent}%`,

    })

    return imgTl;

}

let heroImgTl = createImgAnim(heroImg, 105, 110);
let galleryImgTl = createImgAnim(galleryImg,100, 102);

/*
    heroImgTl.fromTo(heroImg, {

    backgroundSize: "105%",
    },

    {backgroundSize: "110%",

    })
*/

function createListeners(target, timeline){

    target.addEventListener("mouseenter", ()=>{

    timeline.restart();
    })

    target.addEventListener("mouseleave", ()=>{

    timeline.reverse();
    })
}

createListeners(heroImg, heroImgTl);
createListeners(galleryImg, galleryImgTl)


/*
    heroImg.addEventListener("mouseenter", ()=>{

    heroImgTl.restart();
    })

    heroImg.addEventListener("mouseleave", ()=>{

    heroImgTl.reverse();
    })
*/



artImages.forEach((image) =>{

    
    /*const card = document.querySelector("div");

    card.classList.add("artwork-card")

    card.style.setProperty(
        "background-image",
        `url("./media/${image}")`
    )

    artContainer.appendChild(card);
    */

    artContainer.innerHTML += 
    `
    <img src="./media/${image}" class="artwork-img">
    `
})

gsap.to(artContainer, {
    x: () => -(artContainer.scrollWidth - artContainer.parentElement.clientWidth),
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    duration: 25
})

const images = document.querySelectorAll(".artwork-img");

images.forEach((image) =>{

    image.addEventListener("mouseenter", ()=>{
        
        gsap.to(image, {
            y: -10,
            scale: 1.01 
        })
    })

    image.addEventListener("mouseleave", ()=>{
        
        gsap.to(image, {
            y: 10,
            scale: 1
        })
    })
})

//SOCIAL SECTION CHANGES COLOUR DEPENDING ON WHICH PLATFORM YOUR ON AND THE IMAGE TOO