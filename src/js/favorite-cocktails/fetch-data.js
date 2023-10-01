import axios from "axios";

const BASE_URL = "https://drinkify.b.goit.study/api/v1/cocktails/search"


export async function fetchData(letter) {
    
    const options = {
        params: {
            f: letter
        }
    }

    try {
        const response = await axios.get(BASE_URL, options)
        return response
    } catch (error) {
        throw new Error(error)
    }

}