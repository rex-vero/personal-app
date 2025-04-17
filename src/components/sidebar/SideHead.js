import { Avatar, Button, ButtonGroup, Chip, Stack, Typography } from "@mui/material";
import avatar from '../../assets/images/avatar.jpg';
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import { translations } from "../../utils/translations";

const SideHead = () => {
    const { setSnackOpen, lang, setLanguage, handleTheme, themeMode } = useContext(DataContext);
    const { name, job, learn, textBtn, textMode } = translations[lang];
    return (
        <Stack display={'flex'} alignItems={'center'} gap={'5px'} textAlign={'center'} px={1}>
            <Avatar sx={{ height: 100, width: 100, border: '1px solid black' }} alt={name} src={avatar} />
            <Typography>{name}</Typography>
            <Typography variant="caption">{job}</Typography>
            <Chip label={learn} size="small" color="secondary" onClick={() => setSnackOpen(true)} />
            <ButtonGroup sx={{ direction: 'ltr' }}>
                <Button size="small" variant="contained" color="secondary" onClick={setLanguage}>{textBtn}</Button>
                <Button size="small" variant="contained" color="secondary" onClick={handleTheme}>{themeMode === 'dark' ? textMode[0] : textMode[1]}</Button>
            </ButtonGroup>
        </Stack>
    );
}

export default SideHead;