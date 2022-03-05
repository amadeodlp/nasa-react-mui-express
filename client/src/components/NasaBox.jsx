import React, {useEffect} from 'react'
import { getDailyPhoto } from "../services/nasaService";
import { useDispatch, useSelector } from "react-redux";
import { setImageData } from "../state/reducers/nasaReducer";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from "@mui/material";

const NasaBox = () => {

  const {imageData} = useSelector(state => state.nasa)
  const dispatch= useDispatch();

  const nasaData = async () => {
      const dailyPhoto = await getDailyPhoto();
      console.log(dailyPhoto)
      dispatch(setImageData(dailyPhoto))
  }

  useEffect(() => {
      nasaData();
  }, [])

    return (
        <Container sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{maxWidth: '36vw'}}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'column'}}>
              <CardContent
                sx={{minWidth: '50vh', padding: 0, margin: 0}}
              >
              <CardMedia
                component="img"
                image={imageData.hdurl}
                alt="astronomic picture of the day"
                />
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {imageData.title}
                </Typography>
                <Typography size="small" variant="h6" color="primary">
                {imageData.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {imageData.explanation}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>

  );
}

export default NasaBox