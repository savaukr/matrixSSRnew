export const fetching = async (url) => {
    try {
        const result = await fetch(url)
        const  data = await result.json()
        return data
    } catch (e) {
        return e.message
    }
}
//fetching('https://jsonplaceholder.typicode.com/posts/1')