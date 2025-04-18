import { Avatar, Button, ButtonGroup, Chip, Stack, Typography } from "@mui/material";
import avatar from '../../assets/images/avatar.jpg';
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import { translations } from "../../utils/translations";

const SideHead = () => {
    const { setSnackOpen, lang, setLang, themeMode, setThemeMode } = useContext(DataContext);
    const { name, job, learn, textBtn, textMode } = translations[lang];
    return (
        <Stack display={'flex'} alignItems={'center'} gap={'5px'} textAlign={'center'} px={1}>
            <Avatar sx={{ height: 100, width: 100, border: '1px solid black' }} alt={name} src={avatar} />
            <Typography color="text.primary">{name}</Typography>
            <Typography variant="caption" color="text.primary">{job}</Typography>
            <Chip label={learn} size="small" color="text.secondary" onClick={() => setSnackOpen(true)} />
            <ButtonGroup sx={{ direction: 'ltr' }}>
                <Button size="small" variant="contained" color="secondary" sx={{ '&.MuiButton-root': { color: 'text.primary' } }} onClick={() => setLang(prev => (prev === 'en' ? 'fa' : 'en'))}>{textBtn}</Button>
                <Button size="small" variant="contained" color="secondary" sx={{ '&.MuiButton-root': { color: 'text.primary' } }} onClick={() => setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'))}>{themeMode === 'dark' ? textMode[0] : textMode[1]}</Button>
            </ButtonGroup>
        </Stack>
    );
}

export default SideHead;