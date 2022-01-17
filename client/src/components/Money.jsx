import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import { setPrice, setDate } from "../state/reducers/moneyReducer";
import { setLoading } from "../state/reducers/loadingReducer";
import "../styling/Money.css"
import { Box, Container, Button } from '@mui/material';
import { Round } from "./Round";
import { logout } from "../state/reducers/authReducer";

const Money = () => {
  const dispatch = useDispatch();
  const {price, date} = useSelector(state => state.money)
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
            <Container sx={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
              <Box className="slide-container" sx={{display: 'flex', flexDirection: 'row', margin: 5, padding: 3, border: '1px solid #fff', borderRadius: '30px', width: '40%', overflow: 'hidden'}}>
                {date === "Invalid Date" ? "Loading date..." : date}
                <div className="slide">
                  {loading ? "" : price === undefined ? " Loading EUR/USD XR..." : `  EUR/USD XR $${price}`}
                </div>
              </Box>
              {token && <Button onClick={()=>dispatch(logout())}>Logout</Button>}
            </Container>

  )
}

export default Money;
