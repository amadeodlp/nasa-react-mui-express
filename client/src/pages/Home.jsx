import { Container, Typography, Link, Button } from "@mui/material";
import React from 'react';
import { useNavigate } from "react-router-dom";
import NasaBox from "../components/NasaBox";
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
    let navigate = useNavigate();

    return (
        <Container sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%'}}>
            <Header/>
            <NasaBox/>
            <Button onClick={() =>navigate("/marsphotos")}>More in the space</Button>
            <Footer/>
        </Container>
    )
}

export default Home;
