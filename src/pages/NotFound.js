import { Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useLayoutEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";
import { floatAnimation } from "../helpers/Animations";

const NotFound = () => {
    useLayoutEffect(() => {
        document.title = 'Page Not Found';
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, [])
    return (
        <Box height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box boxShadow={'0 0 10px black'} borderRadius={4} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: grey[900], p: 3, m: 2, animation: `${floatAnimation} 2s ease-in-out infinite` }}>
                <Box>
                    <Typography variant="h3" color="textPrimary">OOPS 404 ERROR!</Typography>
                    <Typography variant="h6" sx={{ mb: 3 }} color="textSecondary">We Couldn't Find The Page You Were Looking For</Typography>
                    <Link to={'/'}>
                        <Button variant="contained" sx={{ borderRadius: 4 }} endIcon={<TbArrowBackUp />}>
                            Go Back
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default NotFound;