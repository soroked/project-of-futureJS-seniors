import axios from "axios";

const BASE_URL = 'https://drinkify.b.goit.study/api/v1/ingredients/search/';


export async function getIngredients(letter) {
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



