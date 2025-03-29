import { Avatar, Divider, Typography } from "@mui/material";

const SideHead = () => {
    return (
        <>
            <Avatar sx={{ height: 100, width: 100 }} alt="Mohammad Amin" src={require('../../assets/images/logo.jpg')} >MA</Avatar>
            <Typography>Mohammad Amin Ahmadi</Typography>
            <Typography variant="caption">Front-End Developer</Typography>
            <Divider variant="middle" sx={{ width: 140 }} >
                <Typography variant="subtitle1">text</Typography>
            </Divider>
        </>
    );
}

export default SideHead;