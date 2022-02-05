const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const time = document.getElementById("time");
const btnSet = document.getElementById("btnSet");
const countdown = document.getElementById("countdown");

// let now = new Date().getTime();
// let timer = new Date("Jan 1 2023").getTime();
const checkNumber = (number) => {
	if (number < 10) {
		return "0" + number;
	}
	return number;
};

const formatDate = (date) => {
	let day = checkNumber(date.getDate());
	let month = checkNumber(date.getMonth() + 1);
	let year = checkNumber(date.getFullYear());
	return `${month}-${day}-${year}`;
};

let timer = new Date("Jan 1 2023").getTime();
const getTimer = () => {
	const now = new Date().getTime();
	let counterTime = (timer - now) / 1000;
	let second = checkNumber(Math.floor(counterTime % 60));
	let minute = checkNumber(Math.floor((counterTime / 60) % 60));
	let hour = checkNumber(Math.floor((counterTime / 3600) % 24));
	let day = checkNumber(Math.floor(counterTime / (3600 * 24)));

	days.innerText = day;
	hours.innerText = hour;
	minutes.innerText = minute;
	seconds.innerText = second;
};

btnSet.addEventListener("click", () => {
	timer = new Date(time.value).getTime();
	countdown.innerText = formatDate(new Date(time.value));

	getTimer();

	setInterval(getTimer, 1000);
});

getTimer();

setInterval(getTimer, 1000);
