import { useDispatch, useSelector } from "react-redux";
import { fetchApodData, setImageData } from "./reducers/nasaReducer";

export const NasaStateHandler = async () => {
    const dispatch = useDispatch();
    try {
        const apodData = await fetchApodData();
        dispatch(setImageData(apodData));
    }
    catch (e) {
        return Promise.Reject(e);
    }
}