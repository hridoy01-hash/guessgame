var numberofwin = 0;
var numberoflost = 0;

for (i=0;i<=3;i++) {

    var guessNumber = parseInt(prompt("Enter a Your Guess Number 1-5"));

    var randomNumber = Math.floor((Math.random())*5)+1;

    if(guessNumber == randomNumber){
        console.log("You have Won");
        numberofwin++;
    }

    else{
        console.log("You have Lost.Randdom number is ="+randomNumber);
        numberoflost++;
    }
}
document.write("You have won "+numberofwin+ "times"+"<br>"); 
document.write("You have lost "+numberoflost+"times");git