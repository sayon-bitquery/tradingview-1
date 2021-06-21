
// ---------------- The GraphQL Query ----------------------
const QUERY = ` 
{
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 100, asc: "timeInterval.minute"}
      date: {since: "2021-05-23"}
      exchangeName: {is: "Uniswap"}
      baseCurrency: {is: "0x910985ffa7101bf5801dd2e91555c465efd9aab3"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
    ) {
      timeInterval {
        minute(count: 5)
      }
      baseCurrency {
        symbol
        address
      }
      baseAmount
      quoteCurrency {
        symbol
        address
      }
      quoteAmount
      trades: count
      quotePrice
      maximum_price: quotePrice(calculate: maximum)
      minimum_price: quotePrice(calculate: minimum)
      open_price: minimum(of: block, get: quote_price)
      close_price: maximum(of: block, get: quote_price)
    }
  }
}

`;

// -------- Endpoint ----------------------
const endpoint = "https://graphql.bitquery.io/";

// Function which fetches the data from the API
async function fetchData(){  
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "YOUR BITQUERY API KEY"
    },
    body: JSON.stringify({
        query: QUERY
    })
  });  
  
  const data = await response.json(); 

  // ------------------------------------------- Lightweight chart ------------------------------------------------------
  const chart = LightweightCharts.createChart(document.body, { width: 400, height: 300 });
  const candlestickSeries = chart.addCandlestickSeries();
  chart.applyOptions({
    upColor: 'rgba(255, 0, 0, 1)',
    downColor: 'rgba(0, 255, 0, 1)',
  });
  // set data
  candlestickSeries.setData([
      { time: '2018-12-19', open: data.data.ethereum.dexTrades[0].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[0].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[0].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[0].close_price*Math.pow(10,12) },
      { time: '2018-12-20', open: data.data.ethereum.dexTrades[1].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[1].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[1].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[1].close_price*Math.pow(10,12) },
      { time: '2018-12-21', open: data.data.ethereum.dexTrades[2].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[2].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[2].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[2].close_price*Math.pow(10,12) },
      { time: '2018-12-22', open: data.data.ethereum.dexTrades[3].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[3].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[3].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[3].close_price*Math.pow(10,12) },
      { time: '2018-12-23', open: data.data.ethereum.dexTrades[4].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[4].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[4].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[4].close_price*Math.pow(10,12) },
      { time: '2018-12-24', open: data.data.ethereum.dexTrades[5].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[5].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[5].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[5].close_price*Math.pow(10,12) },
      { time: '2018-12-25', open: data.data.ethereum.dexTrades[6].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[6].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[6].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[6].close_price*Math.pow(10,12) },
      { time: '2018-12-26', open: data.data.ethereum.dexTrades[7].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[7].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[7].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[7].close_price*Math.pow(10,12) },
      { time: '2018-12-27', open: data.data.ethereum.dexTrades[8].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[8].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[8].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[8].close_price*Math.pow(10,12) },
      { time: '2018-12-28', open: data.data.ethereum.dexTrades[9].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[9].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[9].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[9].close_price*Math.pow(10,12) },
      { time: '2018-12-29', open: data.data.ethereum.dexTrades[10].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[10].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[10].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[10].close_price*Math.pow(10,12) },
      { time: '2018-12-30', open: data.data.ethereum.dexTrades[11].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[11].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[11].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[11].close_price*Math.pow(10,12) },
      { time: '2018-12-31', open: data.data.ethereum.dexTrades[12].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[12].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[12].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[12].close_price*Math.pow(10,12) },
      { time: '2019-01-01', open: data.data.ethereum.dexTrades[13].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[13].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[13].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[13].close_price*Math.pow(10,12) },
      { time: '2019-01-02', open: data.data.ethereum.dexTrades[14].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[14].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[14].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[14].close_price*Math.pow(10,12) },
      { time: '2019-01-03', open: data.data.ethereum.dexTrades[15].open_price*Math.pow(10,12), high: data.data.ethereum.dexTrades[15].maximum_price*Math.pow(10,12), low:data.data.ethereum.dexTrades[15].minimum_price*Math.pow(10,12), close: data.data.ethereum.dexTrades[15].close_price*Math.pow(10,12) },
  ]);
}

fetchData();
