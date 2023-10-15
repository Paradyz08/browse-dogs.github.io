const loading = document.querySelector('.loading-frame');
const browseButton = document.querySelector(".browse-button");
const imageEl = document.querySelector(".frame-image");
const imageAnimation = document.querySelector(".image-animation")
const background = document.querySelector(".dog-background")
const animationBackground = document.querySelector(".animation-background") 
const lastBackground = document.querySelector(".last-background")
browseButton.addEventListener("click", browseFunction)
function browseFunction() {
    loading.style.display = 'flex';
    loading.style.opacity = '1';
    imageEl.style.display = 'none';
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((res) => {
        const data = res.json();
        return data;
    })
    .then((data) => {
        console.log(data)
        loading.style.display = 'none';
        loading.style.opacity = '0';
        imageEl.style.display = 'flex';
        imageEl.src = data.message;
    })
}


setTimeout(() =>{
    background.style.display = "block";
}, 4000)

setTimeout(() =>{
    animationBackground.style.display = "block";
}, 5000)

setTimeout(() => {
    lastBackground.style.display = "block";
}, 6000)


