export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=xeU3S2iRS5HDNBMygavk3IHqn9BENMQS`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized.url
        }
    })

    return gifs
}