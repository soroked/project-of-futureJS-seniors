const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';

export const getFavCoctails = async id =>  {
    const response = await fetch(`${BASE_URL}ingredients/{id}`);
    const json = await response.json();
    return json;
}