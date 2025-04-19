import { Box, IconButton, Stack, Tooltip, Typography, Zoom } from "@mui/material";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { lightBlue } from "@mui/material/colors";
import { useContext, useLayoutEffect } from "react";
import DataContext from "../contexts/DataContext";
import { translations } from "../utils/translations";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Link } from "react-router-dom";
import { contacts } from "../utils/contacts";

const Contact = () => {
    const { lang, themeMode, verify, setVerify } = useContext(DataContext);
    const { title, contact, contactText } = translations[lang];
    const handleVerify = token => {
        localStorage.setItem("token", JSON.stringify(token));
        setTimeout(() => {
            setVerify(true);
        }, 1500);
    };
    useLayoutEffect(() => {
        document.title = `${title} - ${contact}`;
    }, [title, contact]);
    return (
        <>
            <ParticlesContainer background={themeMode === 'dark' ? '#080808' : 'rgb(185, 185, 185)'} animationType={'color'} particleColor={lightBlue[700]} />
            {!verify ? <HCaptcha languageOverride={lang} theme={themeMode} sitekey="56307bd4-fc66-4a5e-8110-c65605d0d14a" onVerify={handleVerify} /> : (
                <Box p={3} borderRadius={3} bgcolor={'rgba(214, 214, 214, 0.18)'} boxShadow={themeMode === 'dark' ? '0 0 10px white' : '0 0 10px black'} justifyItems={'center'} sx={{ backdropFilter: 'blur(5px)' }}>
                    <Stack alignItems={'center'}>
                        <Typography color="text.primary" variant="h5" textAlign={'center'}>{contactText}</Typography>
                        <Box>
                            {contacts.map((item, key) => (
                                <Tooltip key={key} title={item.title} arrow slots={{ transition: Zoom }} slotProps={{ transition: { timeout: 300 } }}>
                                    <Link to={item.href} target="_blank">
                                        <IconButton sx={{ fontSize: 40, color: 'text.primary', transition: '.5s', '&.MuiIconButton-root:hover': { color: item.color } }}>
                                            {item.icon}
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                            ))}
                        </Box>
                    </Stack>
                </Box>
            )}
        </>
    );
}

export default Contact;