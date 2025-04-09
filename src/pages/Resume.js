import { Box, Button, Typography } from "@mui/material";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { grey } from "@mui/material/colors";
import resume from '../assets/file/resume.pdf';
import { FaDownload } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import { translations } from "../utils/translations";
import { floatAnimation } from "../utils/animations";

const Resume = () => {
    const { lang } = useContext(DataContext);
    const { download } = translations[lang];
    return (
        <>
            <ParticlesContainer animationType={'link'} numParticles={35} particleColor={grey[700]} />
            <Box p={3} borderRadius={3} bgcolor={'rgba(214, 214, 214, 0.18)'} boxShadow={'0 0 10px white'} justifyItems={'center'} sx={{ backdropFilter: 'blur(5px)', animation: `${floatAnimation} 2s ease-in-out infinite` }}>
                <Typography sx={{ marginBottom: 1, fontSize: { xs: '1.5rem', md: '2.7rem' } }} color="#fff">{download}</Typography>
                <a href={resume} download={'resume.pdf'}>
                    <Button size="large" variant="contained" color="secondary">
                        <FaDownload />
                    </Button>
                </a>
            </Box>
        </>
    );
}

export default Resume;