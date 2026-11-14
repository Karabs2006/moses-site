const artContainer = document.querySelector(".artwork-images-container");
const heroImg = document.querySelector(".hero-img");
const galleryImg = document.querySelector("#gallery");
const artworkHeader = document.querySelector(".artwork-intro h1");
const arrow = document.querySelector(".arrow");
const socialLinksContainer = document.querySelector(".social-links");

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

const platforms = [

    {   
        name: "Tik Tok",
        image:  "tik-tok.svg",
        url: "https://www.tiktok.com/"

    },
    {   
        name: "Instagram",
        image:  "instagram.svg",
        url:"https://www.instagram.com/sandile.moses?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw=="


    },
    {   
        name: "Whatsapp",
        image:  "whatsapp.svg"

    }
]

platforms.forEach((platform) =>{

    if(platform.name != "Whatsapp"){
        const card = document.createElement("div");
        card.classList.add("platform-card");

        card.innerHTML =
        `
            <img src="./media/${platform.image}">
            <a href="${platform.url}">${platform.name}</a>
        `

        socialLinksContainer.appendChild(card);
    }
})




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

const arrowTl = gsap.timeline({paused: true});

arrowTl.to(arrow,
{
    display: "block",
    fillOpacity: 1
})

artworkHeader.addEventListener("mouseenter",()=>{
    
arrowTl.restart();
})
artworkHeader.addEventListener("mouseleave",()=>{
arrowTl.reverse();
})

//SOCIAL SECTION CHANGES COLOUR DEPENDING ON WHICH PLATFORM YOUR ON AND THE IMAGE TOO