const header = document.querySelector("header");
const footer = document.querySelector("footer");
const head = document.querySelector("head");


head.innerHTML += 
`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
`

header.innerHTML = 
`<nav>
    <ul>
        <a href="">Gallery</a>
    </ul>
    <ul>
        <a href="">Artwork</a>
    </ul>



</nav>
`

footer.innerHTML = 
`
    <div class="designer-section">
        <h2>Web Design by:</h2>
        <img src="./media/logo.png">
    </div>

    <button type="button" class="return-btn">Back to top</button>

    <div class="contact section">
        <h2>Cellphone</h2>
        <p>0123456789</p>
        <br>
        <h2>Email</h2>
        <p>Sandile.moses@gmail.com</p>
    
    
    </div>




`