import { Avatar, Chip, Stack, Typography } from "@mui/material";
import avatar from '../../assets/images/avatar.jpg';
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

const SideHead = () => {
    const { setSnackOpen } = useContext(DataContext);
    return (
        <Stack display={'flex'} alignItems={'center'} gap={'5px'} textAlign={'center'} px={1}>
            <Avatar sx={{ height: 100, width: 100 }} alt="Mohammad Amin" src={avatar} >MA</Avatar>
            <Typography>Mohammad Amin Ahmadi</Typography>
            <Typography variant="caption">Front-End Developer</Typography>
            <Chip label="Always Learning" size="small" color="secondary" onClick={() => setSnackOpen(true)} />
        </Stack>
    );
}

export default SideHead;