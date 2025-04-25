import { Box, Chip, Divider, Grid, IconButton, Tooltip, Typography, Zoom } from "@mui/material";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { green } from "@mui/material/colors";
import Typing from "../helpers/Typing";
import { FaBootstrap, FaCss3, FaGitAlt, FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa";
import { SiMui, SiVite } from "react-icons/si";
import { useContext, useLayoutEffect, useState } from "react";
import Modal from "../helpers/Modal";
import DataContext from "../contexts/DataContext";
import { translations } from "../utils/translations";

const About = () => {
    const { lang, themeMode } = useContext(DataContext);
    const { aboutMe, title, about, skill, quote, html, css, bootstrap, sass, js, react, vite, mui, git } = translations[lang];
    const [modalData, setModalData] = useState(null);
    const openModal = item => setModalData(item);
    const icons = [
        { title: 'HTML', icon: <FaHtml5 />, color: '#e44e25', description: html },
        { title: 'CSS', icon: <FaCss3 />, color: '#1572b6', description: css },
        { title: 'Bootstrap', icon: <FaBootstrap />, color: '#820afa', description: bootstrap },
        { title: 'Sass', icon: <FaSass />, color: '#ce679a', description: sass },
        { title: 'JavaScript', icon: <FaJs />, color: '#f7df1e', description: js },
        { title: 'React', icon: <FaReact />, color: '#61dbfb', description: react },
        { title: 'Vite', icon: <SiVite />, color: '#facc15', description: vite },
        { title: 'Material-UI', icon: <SiMui />, color: '#007fff', description: mui },
        { title: 'Git', icon: <FaGitAlt />, color: '#f05033', description: git }
    ];
    useLayoutEffect(() => {
        document.title = `${title} - ${aboutMe}`;
    }, [title, aboutMe]);
    return (
        <Box p={1}>
            <Modal item={modalData} isClose={() => setModalData(null)} isOpen={modalData} />
            <ParticlesContainer background={themeMode === 'dark' ? '#080808' : 'rgb(185, 185, 185)'} particleColor={green[900]} animationType={'number'} />
            <Grid sx={{ flexDirection: 'column', width: { xs: 'auto', md: '30vw' } }} container>
                <Typography fontWeight={100} sx={{ textShadow: '0 0 1px black', fontSize: { xs: '1rem', md: '1.2rem' } }} color="text.primary">
                    <Typing strings={about} typeSpeed={3} />
                </Typography>
                <Divider sx={{ mt: 5 }} />
                <Typography fontWeight={100} mt={5} sx={{ textShadow: '0 0 1px black', fontSize: { xs: '1rem', md: '1.2rem' } }} color="text.primary">
                    <Typing strings={quote} typeSpeed={40} />
                </Typography>
            </Grid>
            <Box mt={6}>
                <Chip color="text.primary" label={<Typing strings={skill} typeSpeed={200} showCursor />} />
                <Grid container mt={3}>
                    {icons.map((item, key) => (
                        <Tooltip key={key} title={item.title} arrow slots={{ transition: Zoom }} slotProps={{ transition: { timeout: 300 } }}>
                            <IconButton onClick={() => openModal(item)} sx={{ color: 'text.primary', transition: '.5s', '&.MuiIconButton-root:hover': { color: item.color } }}>{item.icon}</IconButton>
                        </Tooltip>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default About;