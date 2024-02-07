import "./index.css";

const body = document.querySelector("body");
const buttonSunny = document.querySelector("button.sunny");
const buttonRainy = document.querySelector("button.rainy");
const buttonSnowy = document.querySelector("button.snowy");
const volume = document.getElementById("volume");

const audio = document.getElementById("audio");
audio.loop = true;


function playSound(url) {
	console.log(url.split('/').pop());
	console.log(audio.currentSrc.split('/').pop());

	if (audio.currentSrc.split('/').pop() != url.split('/').pop()) {
		audio.pause();
		audio.src = url;
		audio.play();
	} else {
		audio.paused ? audio.play() : audio.pause();
	}
}

buttonSunny.addEventListener("click", () => {
	body.classList.remove("snowy");
	body.classList.remove("rainy");
	body.classList.add("sunny");
	playSound("./assets/sounds/summer.mp3");
	console.log("sunny");
})

buttonRainy.addEventListener("click", () => {
	body.classList.remove("snowy");
	body.classList.add("rainy");
	body.classList.remove("sunny");
	playSound("./assets/sounds/rain.mp3");
	console.log("rainy");
})

buttonSnowy.addEventListener("click", () => {
	body.classList.add("snowy");
	body.classList.remove("rainy");
	body.classList.remove("sunny");
	playSound("./assets/sounds/winter.mp3");
	console.log("snowy");
})

volume.addEventListener("input", (e) => {
	audio.volume = e.target.value / 100;
	console.log(e.target.value);
})
