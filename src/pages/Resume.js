import { Box, Button, Typography } from "@mui/material";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { grey } from "@mui/material/colors";
import resume from '../assets/file/resume.pdf';
import { FaDownload } from "react-icons/fa";
import { useContext, useLayoutEffect, useState } from "react";
import DataContext from "../contexts/DataContext";
import { translations } from "../utils/translations";
import { floatAnimation } from "../utils/animations";
import Reveal from "../helpers/Reveal";
import { Link } from "react-router-dom";

const Resume = () => {
    const [hover, setHover] = useState(false);
    const { lang, themeMode } = useContext(DataContext);
    const { download, title, resumePage } = translations[lang];
    useLayoutEffect(() => {
        document.title = `${title} - ${resumePage}`;
    }, [title, resumePage]);
    return (
        <>
            <ParticlesContainer background={themeMode === 'dark' ? '#080808' : '#1C1C1C'} animationType={'link'} numParticles={35} particleColor={grey[700]} />
            <Box onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} p={3} borderRadius={3} bgcolor={'rgba(214, 214, 214, 0.18)'} boxShadow={'0 0 10px white'} justifyItems={'center'} sx={{ backdropFilter: 'blur(5px)', animation: `${floatAnimation} 2s ease-in-out infinite` }}>
                <Typography sx={{ marginBottom: 1, fontSize: { xs: '1.5rem', md: '2.7rem' } }} color="#fff">{hover ? <Reveal text={download} lang={lang} duration={1} /> : download}</Typography>
                <Link to={resume} target="_blank" download={'resume.pdf'}>
                    <Button size="large" variant="contained" color="secondary">
                        <FaDownload />
                    </Button>
                </Link>
            </Box>
        </>
    );
}

export default Resume;