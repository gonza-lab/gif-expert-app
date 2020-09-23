export const getGif = async (category) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=67tJhuB4W4ZAh3g6S7yTbetenmbmx0Rv&q=${encodeURI(
      category
    )}&limit=10`
  );
  const { data } = await res.json();

  return data.map((gif) => {
    const { id, title } = gif;
    return {
      id,
      title,
      url: gif.images.downsized_medium.url,
    };
  });
};
