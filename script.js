
let par = 0;
let totalScore = 0;
let totalPar = 0;
let yourName = prompt("Welcome to GC mini golf! What is your name?");
console.log(yourName);

let holes = null;
while ( true ) {
    holes = prompt (`Hi ${yourName}! Would you like to play 3 or 6 holes today?`);
    if (holes === "3" || holes === "6") {break} else
    {alert("Please enter either a 3 or a 6.")}
}
console.log(holes);

for (let i = 1; i <= holes; i++) {
    let putts = prompt(`How many putts for hole ${i}? (par is 3)`);
     totalScore += Number(putts);
     par += 3;
     console.log(putts);
}

totalPar = totalScore - par;
console.log(totalPar);

if (totalScore > par){
    console.log(`Nice try, ${yourName}, Your total par was ${totalPar}.`);
} else if(totalScore < par) {
    console.log(`Great job, ${yourName}! Your total par was ${totalPar}.`);
} else if(totalScore = par) {
    console.log(`Grood job, ${yourName}! Your total par was ${totalPar}.`);
}



