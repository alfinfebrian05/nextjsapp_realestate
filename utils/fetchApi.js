import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-key": "039c1eb86dmshf6352de151ea085p1d59cdjsn9e5c71dea544",
      "x-rapidapi-host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
