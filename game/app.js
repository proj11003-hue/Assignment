let answer = 7;
let userans = Number(prompt("Guess the correct number between 1-10"));



if (answer === userans) {
  console.log("Bilkul sahi jawab!");
} else if (userans==answer- 1) {
  console.log("Ik step or");
} else if (userans==answer + 1) {
  console.log("Ik step aage chale gae!");
}else if (userans==answer +2 ||userans==answer-2){
    console.log("Kuch or try karo")
} else if(userans==answer +3 ){
    console.log("Kafi aage!!")}
    else if(userans==answer -3 ){
    console.log("Kafi peche!!")}
    else if(userans==answer -6 ){
    console.log("bohat low guess hai!!")}
 else {
  console.log("Galat jawab!");
}
