import { Box, Button, Typography } from "@mui/material";
import { cyan, grey } from "@mui/material/colors";
import { useContext, useLayoutEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";
import { floatAnimation } from "../utils/animations";
import ParticlesContainer from "../helpers/ParticlesContainer";
import DataContext from "../contexts/DataContext";
import { translations } from "../utils/translations";

const NotFound = () => {
    const { lang, themeMode } = useContext(DataContext);
    const { errTitle, error404, errText } = translations[lang];
    useLayoutEffect(() => {
        document.title = errTitle;
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, [errTitle])
    return (
        <Box height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <ParticlesContainer background={themeMode === 'dark' ? '#080808' : 'rgb(185, 185, 185)'} animationType={'error'} numParticles={50} particleColor={cyan[700]} />
            <Box boxShadow={themeMode === 'dark' ? '0 0 10px black' : '0 0 10px white'} borderRadius={4} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: themeMode === 'dark' ? grey[900] : grey[400], p: 3, m: 2, animation: `${floatAnimation} 2s ease-in-out infinite` }}>
                <Box>
                    <Typography variant="h3" color="text.primary">{error404}</Typography>
                    <Typography variant="h6" sx={{ mb: 3 }} color="text.primary">{errText}</Typography>
                    <Link to={'/'}>
                        <Button size="large" variant="contained" sx={{ borderRadius: 4 }}>
                            <TbArrowBackUp />
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default NotFound;