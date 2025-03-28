import { Avatar, Divider, Box, Typography } from "@mui/material";

const Sidebar = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'5px'} textAlign={'center'} mt={2}>
            <Avatar sx={{ height: 100, width: 100 }} src={require('../../assets/images/logo.jpg')} />
            <Typography>Mohammad Amin Ahmadi</Typography>
            <Typography variant="caption">Front-End Developer</Typography>
            <Divider variant="middle" sx={{ width: 140 }} >
                <Typography variant="subtitle1">text</Typography>
            </Divider>
        </Box>
    );
}

export default Sidebar;