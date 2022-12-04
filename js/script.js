"use strict";

// const btn = document.querySelector('#btn');

// function myAnimation() {
//   const car = document.querySelector('.car');
//   let pos = 0;

//   const timerId = setInterval(frame, 10);

//   function frame() {
//     if (pos === 700) {
//       clearInterval(timerId);
//     } else {
//       pos++;
//       car.style.left = pos + 'px';
//     }
//   }
// }

// btn.addEventListener('click', myAnimation);
const btn = document.querySelector("#btn");

let timerId;
let i = 0;

btn.addEventListener("click", () => {
	const car = document.querySelector(".car");
	let pos = 0;

	const timerId = setInterval(frame, 10);

	function frame() {
		if (pos === 700) {
			clearInterval();
		} else {
			pos++;
			car.style.left = pos + "px";
		}
	}
});

// clearInterval(timerId);

// function logger() {
// 	if (i === 3) {
// 		clearInterval(timerId);
// 	}
// 	i++;
// 	console.log(i);
// }
