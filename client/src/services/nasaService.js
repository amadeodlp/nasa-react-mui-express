import { get } from "./publicApiService";

export const getDailyPhoto = async () => {
    const res = await get(process.env.REACT_APP_DAILY_URL);
    return res.data
  };

export const getMarsPhotos = async () => {
    const res = await get(process.env.REACT_APP_MARS_URL);
    return res.data 
  };