import axios from "axios";

const API_KEY =
  "UfQ8QQWyQDuAyQflZcx4gAx839mWt4rF";
const BASE_URL =
  "https://api.giphy.com/v1/gifs/search";

export const getGifs = async (
  category
) => {
  const response = await axios(
    `${BASE_URL}?api_key=${API_KEY}&q=${category}&limit=1`
  );
  const { data } = await response;
  const gif = data.data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium
      .url,
  }));

  return gif;
};
