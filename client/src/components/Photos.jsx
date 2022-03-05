import React, {useEffect} from 'react'
import { getMarsPhotos } from "../services/nasaService";
import { useDispatch, useSelector } from "react-redux";
import { setMarsData } from "../state/reducers/nasaReducer";
import '../styling/Photos.css';
import { sortRandomly } from "./Round";

const Photos = () => {

  const {marsData} = useSelector(state => state.nasa)
  const dispatch= useDispatch();
  const marsDataRandomly = sortRandomly(marsData)

  const nasaData = async () => {
      const marsPhotos = await getMarsPhotos();
      dispatch(setMarsData(marsPhotos.photos))
  }

  useEffect(() => {
      nasaData();
  }, [])

  return (
    <div className='row d-flex justify-content-center align-items-center'>
     {marsDataRandomly && marsDataRandomly.map((item) => {
       const {img_src, id} = item
        return (
            <div key={id} className="col-12 col-sm-4 text-center p-5">
              <img src={img_src} className='img-fluid mb-4'></img>
              <button className='btn btn-secondary d-block m-auto'><a className="text-decoration-none text-white" target='_blank' href={img_src} download>Download</a></button>
            </div>
        )
      })}
     </div>
  )
}

export default Photos