async function RSI() {
let url = "https://www.alphavantage.co/query?function=RSI&symbol=IBM&interval=1min&time_period=10&series_type=close&fastkperiod=6&fastdmatype=1&apikey=MUBGMKH49DO70QIB"  
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
    // let latestDate = Object.keys(data["Technical Analysis: RSI"])[0];  
    // let rsiValue = data["Technical Analysis: RSI"][latestDate].RSI;    
    
    // console.log(`Date: ${latestDate}, RSI: ${rsiValue}`);
    // updatePage(latestDate, rsiValue);
  } 


// function updatePage(date, rsi) {
//   document.getElementById('date').innerText = `Date: ${date}`;
//   document.getElementById('rsi').innerText = `RSI: ${rsi}`;
// }

setInterval(RSI, 60000);
RSI();
