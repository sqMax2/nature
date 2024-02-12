import "./index.css";

const body: HTMLBodyElement = document.querySelector("body") as HTMLBodyElement;
const buttonSunny: HTMLButtonElement = document.querySelector("button.sunny") as HTMLButtonElement;
const buttonRainy: HTMLButtonElement = document.querySelector("button.rainy") as HTMLButtonElement;
const buttonSnowy: HTMLButtonElement = document.querySelector("button.snowy") as HTMLButtonElement;
const volume: HTMLInputElement = document.getElementById("volume") as HTMLInputElement;

const audio: HTMLAudioElement = document.getElementById("audio") as HTMLAudioElement;
audio.loop = true;


function playSound(url: string): void {
	// console.log(url.split('/').pop());
	// console.log(audio.currentSrc.split('/').pop());

	if (audio.currentSrc.split('/').pop() != url.split('/').pop()) {
		audio.pause();
		audio.src = url;
		audio.play();
	} else {
		audio.paused ? audio.play() : audio.pause();
	}
}

buttonSunny.addEventListener("click", ():void => {
	body.classList.remove("snowy");
	body.classList.remove("rainy");
	body.classList.add("sunny");
	playSound("./assets/sounds/summer.mp3");
	// console.log("sunny");
})

buttonRainy.addEventListener("click", ():void => {
	body.classList.remove("snowy");
	body.classList.add("rainy");
	body.classList.remove("sunny");
	playSound("./assets/sounds/rain.mp3");
	// console.log("rainy");
})

buttonSnowy.addEventListener("click", ():void => {
	body.classList.add("snowy");
	body.classList.remove("rainy");
	body.classList.remove("sunny");
	playSound("./assets/sounds/winter.mp3");
	// console.log("snowy");
})

volume.addEventListener("input", (e: Event): void => {
	audio.volume = parseInt((e.target as HTMLInputElement).value) / 100;
	// console.log(e.target!.value);
})
