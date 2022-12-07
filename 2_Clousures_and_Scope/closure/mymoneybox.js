// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(10);


function moneybox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneybox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const myMoneyBox2 = moneybox();
myMoneyBox2(10);
myMoneyBox2(20);
myMoneyBox2(5);