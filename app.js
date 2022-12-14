const buyingPrice = document.querySelector("#buy-price");
const numOfStocks = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");

const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitButton.addEventListener('click',submitHandler);
buyingPrice.addEventListener('change',(e)=>initialPrice(e));
numOfStocks.addEventListener('change',(e)=>stockQuantity(e));

const initialPrice = (e)=>{
  let val = e.target.value;
  if(val <= 0){
    showOutput(`Please enter a positive value greater than 0`);
  } 
}

const stockQuantity = (e)=>{
  let val = e.target.value;
  if(val <= 0){
    showOutput(`Please enter a positive value greater than 0`)
  }
}

function submitHandler(){
    var bp = Number(buyingPrice.value);
    var nos = Number(numOfStocks.value);
    var curr = Number(currentPrice.value);

    calcProfitAndLoss(bp,nos,curr);
}

function calcProfitAndLoss(buyingPrice, numOfStocks, currentPrice) {
  //Loss
  if (buyingPrice > currentPrice) {
    var loss = (buyingPrice - currentPrice) * numOfStocks;
    var lossPercent = ((loss/(buyingPrice*numOfStocks))*100).toFixed(2);
    if(lossPercent>50){
      document.body.style.backgroundColor = "#910505";
    }else{
      document.body.style.backgroundColor = "#3A2A8A";
    }

  showOutput(`Sorry bruh 😪, you lost ${loss} and the Loss percentage is ${lossPercent}%`);
 
  } else if (buyingPrice < currentPrice) {
    //Profit
    var profit = (currentPrice - buyingPrice) * numOfStocks; 
    var profiPercent = ((profit/(buyingPrice*numOfStocks))*100).toFixed(2);
       document.body.style.backgroundColor = "#3A2A8A";


  showOutput(`Yay bruh 🥂, you made a profit of ${profit} and that is ${profiPercent}% gain`);

  } else {
    //Breakeven
       document.body.style.backgroundColor = "#3A2A8A";
  showOutput("No profit, No Loss - You gotta wait");
  }
}

function showOutput(msg){
    outputBox.innerHTML = msg;
}


