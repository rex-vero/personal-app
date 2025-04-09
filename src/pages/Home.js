import { Box, Typography } from "@mui/material";
import Typing from "../helpers/Typing";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { blue, green, grey } from "@mui/material/colors";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import { translations } from "../utils/translations";

const Home = () => {
    const { lang } = useContext(DataContext);
    const { fullName, titles } = translations[lang];
    return (
        <Box textAlign={'center'} m={1}>
            <ParticlesContainer particleColor={blue[100]} animationType={'snow'} />
            <Typography color={grey[50]} sx={{ fontSize: { xs: '1.5rem', md: '3rem' } }}>
                {'[{ "'}<Typing strings={fullName} typeSpeed={100} />{'" }]'}
            </Typography>
            <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.8rem' } }} color={green[800]}>
                <Typing loop strings={titles} typeSpeed={90} backSpeed={25} />
            </Typography>
        </Box>
    );
}

export default Home;