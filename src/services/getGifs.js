/**
 * Implementar un parametro para la clasificación de los gifs por su contenido
 * nombre parametro: 'rating'
 * valores: 'g', 'pg', 'pg-13', 'r'
 */

const getGifs = ({limit = 5, searchWord = '', rating = 'g'}) => {

  // const searchWord = search.replace(' ', '+')

  const searchURL = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${searchWord}&limit=${limit}&rating=${rating}`
  const trendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&limit=${limit}&rating=${rating}`
  const URL = (searchWord == '') ? trendingURL : searchURL
  
  return fetch(URL)
    .then(response => response.json())
    .then(response => response['data'])
}

export default getGifs