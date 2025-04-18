import { Box } from "@mui/material";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { lightBlue } from "@mui/material/colors";
import { useContext, useLayoutEffect } from "react";
import DataContext from "../contexts/DataContext";
import { translations } from "../utils/translations";

const Contact = () => {
    const { lang, themeMode } = useContext(DataContext);
    const { title, contact } = translations[lang];
    useLayoutEffect(() => {
        document.title = `${title} - ${contact}`;
    }, [title, contact]);
    return (
        <Box>
            <ParticlesContainer background={themeMode === 'dark' ? '#080808' : 'rgb(185, 185, 185)'} animationType={'color'} particleColor={lightBlue[700]} />
        </Box>
    );
}

export default Contact;