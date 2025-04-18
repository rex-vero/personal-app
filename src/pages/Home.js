import { Box, Typography } from "@mui/material";
import Typing from "../helpers/Typing";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { blue, green, grey } from "@mui/material/colors";
import { useContext, useLayoutEffect } from "react";
import DataContext from "../contexts/DataContext";
import { translations } from "../utils/translations";
import Reveal from "../helpers/Reveal";

const Home = () => {
    const { lang, themeMode } = useContext(DataContext);
    const { title, titles, name } = translations[lang];
    useLayoutEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <Box textAlign={'center'} m={1}>
            <ParticlesContainer background={themeMode === 'dark' ? '#080808' : 'rgb(158, 158, 158)'} particleColor={themeMode === 'dark' ? blue[100] : 'rgb(8, 8, 8)'} animationType={'snow'} />
            <Typography color={grey[50]} sx={{ fontSize: { xs: '1.5rem', md: '3rem' } }}>
                {'[{ "'}<Reveal text={name} lang={lang} duration={3.5} />{'" }]'}
            </Typography>
            <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.8rem' } }} color={green[800]}>
                <Typing loop strings={titles} typeSpeed={90} backSpeed={25} />
            </Typography>
        </Box>
    );
}

export default Home;