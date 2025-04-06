import { Box, Typography } from "@mui/material";
import Typing from "../helpers/Typing";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { blue } from "@mui/material/colors";

const Home = () => {
    return (
        <Box>
            <ParticlesContainer particleColor={blue[50]} animationType={'snow'} />
            <Typography color="error">
                <Typing loop strings={['hello', 'how are you?']} typeSpeed={50} backDelay={20} backSpeed={25} />
            </Typography>
        </Box>
    );
}

export default Home;