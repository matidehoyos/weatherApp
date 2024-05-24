import axios from "axios"

const weatherProvider = {
    async getCurrentWeather(city) {
        try {
            const response = await axios(`/${city}`)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    },
    async getExtendido(city) {
        try {
            const response = await axios(`/extendido/${city}`)
            return response.data
        } catch (error) {
            return error.message
        }
    },
}

export default weatherProvider