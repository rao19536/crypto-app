import axios from 'axios'

export const getRequestFunc = async (url) => {
    const data = await axios.get(url)
    return data
}
