const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
};

//-------------test---------------
// const myCity = {
// 	city: 'New York'
// 	info: {
// 		isPopular: true,
// 		country: 'USA'
// 	}
// }

// const objectA = {
// 	a: 10,
// 	b: true
// }
// const copyOfta = objectA;
// copyOfta.b = 'abs';

// console.log(copyOfta);

// function a() {
// 	console.log('Hey there');
// }
// a ();
// a = 10;
// a ();

// let myAge = 38;
// let humanDogRatino = 7;
// let myDogAge = myAge * humanDogRatino;
//  console.log(myDogAge);

// let count = 5;
// count = count + 1;//5 + 1
// console.log(count);

// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// function incriment() {
// 	console.log("The button was clicked");
// }

// function myLogger() {
// 	console.log(42);
// }
// myLogger();

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function mySum() {
// 	let sam = lap1 + lap2 + lap3;
// 	console.log(sam);
// }
// mySum();

// let lapsComoleted = 0;
// function incrementLap() {
// 	lapsComoleted = lapsComoleted + 1;
// 	console.log(lapsComoleted);
// }
// incrementLap();
// incrementLap();
// incrementLap();

// let countEl = document.getElementById ("count-el");
// let count = 0;
// function incriment() {
// count = count + 1;
// countEl.innerText = count;
// };
// function save() {
// 	console.log(count)
// }
// save();

// let username = "Bogdan";
// let message = "You have tree new notification";
// console.log(message + " , " + username + "!");
