const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input")

let audio = new Audio(`./src/tunes/a.wav`)

const mapedKeys = [];

 
pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key))
    mapedKeys.push(key.dataset.key);
})

function playTune(key) {
   audio.src = (`./src/tunes/${key}.wav`)
   audio.play();

   const clickedKey = document.querySelector(`[data-key="${key}"]`)
   clickedKey.classList.add("active")
   setTimeout(() => {
    clickedKey.classList.remove("active")
   }, 150)
}

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
         playTune(e.key)
    }
})

const handleVolume = (e) => {
    audio.volume = e.target.value
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys)

