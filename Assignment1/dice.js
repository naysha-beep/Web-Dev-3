const crypto = require("crypto");
function rollDice(){
    const random=crypto.randomInt(1,7);
    console.log(`dice rolled:${random}`);

}
for (let i=0;i<5;i++){
    rollDice();
}