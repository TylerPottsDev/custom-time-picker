const time_picker_element = document.querySelector('.time-picker');

const hr_element = document.querySelector('.time-picker .hour .hr');
const min_element = document.querySelector('.time-picker .minute .min');

const hr_up = document.querySelector('.time-picker .hour .hr-up');
const hr_down = document.querySelector('.time-picker .hour .hr-down');

const min_up = document.querySelector('.time-picker .minute .min-up');
const min_down = document.querySelector('.time-picker .minute .min-down');

let d = new Date();

let hour = d.getHours();
let minute = d.getMinutes();
setTime();

// EVENT LISTENERS
hr_up.addEventListener('click', hour_up);
hr_down.addEventListener('click', hour_down);

min_up.addEventListener('click', minute_up);
min_down.addEventListener('click', minute_down);

hr_element.addEventListener('change', hour_change);
min_element.addEventListener('change', minute_change);

function hour_change (e) {
	if (e.target.value > 23) {
		e.target.value = 23;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = formatTime(hour);
	}

	hour = e.target.value;
}

function minute_change (e) {
	if (e.target.value > 59) {
		e.target.value = 59;
	} else if (e.target.value < 0) {
		e.target.value = '00';
	}

	if (e.target.value == "") {
		e.target.value = formatTime(minute);
	}

	minute = e.target.value;
}

function hour_up () {
	hour++;
	if (hour > 23) {
		hour = 0;
	}
	setTime();
}
function hour_down () {
	hour--;
	if (hour < 0) {
		hour = 23;
	}
	setTime();
}

function minute_up () {
	minute++;
	if (minute > 59) {
		minute = 0;
		hour++;
	}
	setTime();
}
function minute_down () {
	minute--;
	if (minute < 0) {
		minute = 59;
		hour--;
	}
	setTime();
}

function setTime () {
	hr_element.value = formatTime(hour);
	min_element.value = formatTime(minute);
	time_picker_element.dataset.time = formatTime(hour) + ':' + formatTime(minute);
}

function formatTime (time) {
	if (time < 10) {
		time = '0' + time;
	}
	return time;
}