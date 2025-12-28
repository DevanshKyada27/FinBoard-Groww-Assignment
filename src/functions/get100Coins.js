import axios from "axios";

export const get100Coins = () => {
  const myCoins = axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&order=market_cap_desc&per_page=100&page=1"
    )
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log("error>>>>>", error);
      setIsLoading(false);
    });

  return myCoins;
};
