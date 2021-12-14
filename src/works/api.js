//Indentation- Shift + Alt + F
import axios from 'axios';

const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='d30a511afa30a04eae30f938299a799d';

export const getData = async(city, country) => {
    return await axios.get(`${URL}?q=${city}, ${country}&appid=${API_KEY}&units=metric`);
}