import { Box, Typography } from "@mui/material";
import Typing from "../helpers/Typing";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { blue, green, grey } from "@mui/material/colors";

const Home = () => {
    return (
        <Box textAlign={'center'} m={1}>
            <ParticlesContainer particleColor={blue[100]} animationType={'snow'} />
            <Typography color={grey[50]} sx={{ fontSize: { xs: '1.5rem', md: '3rem' } }}>
                <Typing strings={['[{ "Mohammad Amin Ahmadi" }]']} typeSpeed={100} />
            </Typography>
            <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.8rem' } }} color={green[800]}>
                <Typing loop strings={["I'm Front-End Developer", "I'm Programer", "I'm Always Excited To Bring Life With Code"]} typeSpeed={90} backSpeed={25} />
            </Typography>
        </Box>
    );
}

export default Home;