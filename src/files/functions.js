const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

export const getSongs = async function (word) {
  try {
    const res = await fetch(endpoint + word);
    if (!res.ok) {
      throw new Error("errore nella response");
    }
    const data = await res.json();
    return data;
  } catch (er) {
    throw new Error(er.toString());
  }
};
