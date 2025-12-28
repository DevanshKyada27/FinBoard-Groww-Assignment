// import axios from "axios";

// export const getCoinData = ({ id }) => {
//   const myData = axios
//     .get(`https://api.coingecko.com/api/v3/coins/${id}`)
//     .then((response) => {
//       if (response.data) {
//         return response.data;
//       }
//     })
//     .catch((e) => {
//       console.log(e.message);
//       if (setError) {
//         setError(true);
//       }
//     });

//   return myData;
// };

import axios from "axios";

export const getCoinData = async (id) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching coin data:", error.message);
    throw error;
  }
};
