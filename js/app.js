// function getRandom(max){
// 	console.log(Math.floor(Math.random() * max))
// }

// getRandom(6)

//get container
let bg = document.querySelector('.container')

// function getBgColor(){
// 	if (bg.style.background = ){
// 		console.log(true)
// 	}else{
// 		console.log(false)
// 	}
// }
// getBgColor()

//array path to access images
let images = ["img/dice1.png", "img/dice2.png","img/dice3.png","img/dice4.png","img/dice5.png","img/dice6.png",]

//selects player1 image this image will change when the button is clicked
let img1 = document.querySelector(".dice1")
//selects player2 image
let img2 = document.querySelector(".dice2")

//get the button
let btn = document.querySelector('.btn')

let winner = document.querySelector('.title-refresh')

btn.addEventListener('click', ()=>{
	//generates a random index for player1
	const randomIndex1 = Math.floor(Math.random() * images.length)
	let randomIndex2;

	//this loop ensures that the second random image is different from the first
	do{
		//generates a random index for player2
		randomIndex2 = Math.floor(Math.random() * images.length)

		let winner1 = "Player 1 is the winner"

		let winner2 = "Player 2 is the winner"

		if(randomIndex1 > randomIndex2 ){
			winner.innerHTML = winner1; 
			winner.style.color = "green"
		}else{
			winner.innerHTML = winner2;
			winner.style.color = "green"
		}


	}while(randomIndex1 === randomIndex2)

	img1.src = images[randomIndex1]
	img2.src = images[randomIndex2]

})

//get reset button
let resetBtn = document.querySelector(".btn-reset")

//sets page back to it's default
resetBtn.addEventListener("click", ()=>{
	img1.src = images[5]
	img2.src = images[5]

	winner.innerHTML = "Refresh Me"
	winner.style.color = "#000"
})