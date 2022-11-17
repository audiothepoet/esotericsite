const imageArray = ['-f/Wands11.jpg', '-f/13-Death.jpg', '-f/16-TheTower.jpg', '-f/Wands01.jpg', '-f/Swords12.jpg', '-f/Wands05.jpg', '-f/Wands09.jpg', '-f/15-TheDevil.jpg', '-f/Pentacles10.jpg', '-f/Wands08.jpg', '-f/Cups08.jpg', '-f/Swords09.jpg', '-f/Swords13.jpg', '-f/Pentacles02.jpg', '-f/Pentacles03.jpg', '-f/Wands02.jpg', '-f/14-Temperance.jpg', '-f/Pentacles01.jpg', '-f/21-TheWorld.jpg', '-f/Wands07.jpg', '-f/Cups10.jpg', '-f/Swords10.jpg', '-f/18-TheMoon.jpg', '-f/03-TheEmpress.jpg', '-f/Swords11.jpg', '-f/09-TheHermit.jpg', '-f/08-Strength.jpg', '-f/Cups02.jpg', '-f/Pentacles08.jpg', '-f/Swords05.jpg','-f/00-TheFool.jpg', '-f/Pentacles13.jpg', '-f/Pentacles11.jpg', '-f/11-Justice.jpg', '-f/05-TheHierophant.jpg', '-f/Cups05.jpg', '-f/Cups01.jpg', '-f/Swords01.jpg', '-f/Swords04.jpg', '-f/Pentacles04.jpg', '-f/06-TheLovers.jpg', '-f/Wands14.jpg', '-f/Swords06.jpg', '-f/20-Judgement.jpg', '-f/Cups13.jpg', '-f/12-TheHangedMan.jpg', '-f/Wands10.jpg', '-f/Wands04.jpg', '-f/02-TheHighPriestess.jpg', '-f/Pentacles06.jpg', '-f/01-TheMagician.jpg', '-f/Cups03.jpg', '-f/Wands12.jpg', '-f/Pentacles09.jpg', '-f/Wands06.jpg', '-f/Swords08.jpg', '-f/Swords14.jpg', '-f/Cups11.jpg', '-f/17-TheStar.jpg', '-f/Cups06.jpg', '-f/19-TheSun.jpg', '-f/Pentacles07.jpg', '-f/Pentacles12.jpg', '-f/Wands03.jpg', '-f/Pentacles14.jpg', '-f/Swords02.jpg', '-f/Cups14.jpg', '-f/Swords03.jpg', '-f/Cups12.jpg', '-f/Wands13.jpg', '-f/Pentacles05.jpg', '-f/Swords07.jpg', '-f/07-TheChariot.jpg', '-f/04-TheEmperor.jpg', '-f/Cups04.jpg', '-f/Cups09.jpg', '-f/10-WheelOfFortune.jpg', '-f/Cups07.jpg'];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
	image.height=400;
	image.width=300;
}
