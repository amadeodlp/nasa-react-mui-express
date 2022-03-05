import { get } from "./publicApiService";

const dailyPhotoUrl = process.env.REACT_APP_DAILY_URL
const marsPhotoUrl = process.env.REACT_APP_MARS_URL

export const getDailyPhoto = async () => {
    const res = await get("https://api.nasa.gov/planetary/apod?api_key=JI3j4x7CNUciPxWjMiXc1K3j4Tyz4xM9VP8hgep3");
    return res.data
  };

export const getMarsPhotos = async () => {
    const res = await get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=AAAsgutnXpz4TgUDyVj4ctcmsxWSY0bnbWabvOF5');
    return res.data 
  };