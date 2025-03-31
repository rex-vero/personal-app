import { Avatar, Divider, Stack, Typography } from "@mui/material";

const SideHead = () => {
    return (
        <Stack display={'flex'} alignItems={'center'} gap={'5px'} textAlign={'center'}>
            <Avatar sx={{ height: 100, width: 100 }} alt="Mohammad Amin" src={require('../../assets/images/mohammad-amin .jpg')} >MA</Avatar>
            <Typography>Mohammad Amin Ahmadi</Typography>
            <Typography variant="caption">Front-End Developer</Typography>
            <Divider variant="middle" sx={{ width: 240 }} >
                <Typography fontSize={12} px={1} variant="subtitle1">Always Learning</Typography>
            </Divider>
        </Stack>
    );
}

export default SideHead;