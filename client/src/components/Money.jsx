import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import { setPrice, setDate, setDiff } from "../state/reducers/moneyReducer";
import { setLoading } from "../state/reducers/loadingReducer";
import "../styling/Money.css"
import { Container, Button } from '@mui/material';
import Round from "./Round";
import { PercDiff } from "./Round";
import { logout } from "../state/reducers/authReducer";

const Money = () => {
  const dispatch = useDispatch();
  const {price, date, diff} = useSelector(state => state.money)
  const {loading} = useSelector(state => state.loading)
  const {token} = useSelector(state=> state.auth)

  useEffect(() => {
    const apiCall = {
      "topic": "subscribe", 
      "to": "EURUSD:CUR"
    }
    const ws = new WebSocket('ws://stream.tradingeconomics.com/?client=guest:guest');
    ws.onopen = () => {
    ws.send(JSON.stringify(apiCall));
    };
    ws.onmessage = async (event) => {
      try {
        const json = await JSON.parse(event.data)
        if (json) {
        const localDate = new Date(json.dt);
        const currentPrice = typeof(json.price) === 'number' ? Round(json.price) : undefined;
        const priceDiff = typeof(json.prev) === 'number' ? Round(PercDiff(json.prev, json.price)) : undefined;
        dispatch(setDiff(priceDiff));
        dispatch(setPrice(currentPrice))
        dispatch(setDate(localDate.toDateString()))
        dispatch(setLoading(false))
      } else {
      throw new Error();
      }
    } catch (e) {
      return Promise.reject(e)
    }
    };
    return () => ws.close();
}, [dispatch]);

  return (  
    <div className="money-container">
      <div className="slide-container">
        <div className="date">
          {date === "Invalid Date" ? "Loading date..." : date}
        </div>
        <div className="slide">
          {loading ? "" : price === undefined ? " Loading EUR/USD XR..." : `  EUR/USD XR $${price} `}
          <div className="diff" style={{color: diff > 0 ? 'green' : 'red'}}>
            <strong>
            {diff > 0 && `+`}{diff + ( diff && `%`)}
            </strong>
          </div>
        </div>
      </div>
      {token && 
      <div className="logout-btn">
      <Button variant= 'outlined' onClick={()=>dispatch(logout())}>Logout</Button>
      </div>
      }
    </div>
  )
}

export default Money;
