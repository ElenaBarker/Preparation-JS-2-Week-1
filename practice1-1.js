let stock = {
  name: "aapl",
  lastClosingPrice: 171.45,
  lastFiveDaysClosingPrices: [180.33, 176.28, 175.64, 172.99, 171.45],
};

stock.name; // `aapl`
stock["name"]; // `aapl`
stock.lastClosingPrice * 100; // 17145
stock.lastFiveDaysClosingPrices[1]; // 176.28

stock.name = "AAPL"; // `AAPL`

stock; // {
  //name: "aapl",
  //lastClosingPrice: 171.45,
  //lastFiveDaysClosingPrices: [180.33, 176.28, 175.64, 172.99, 171.45],
//} 