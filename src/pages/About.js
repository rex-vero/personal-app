import { Box } from "@mui/material";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { green } from "@mui/material/colors";

const About = () => {
    return (
        <Box>
            <ParticlesContainer particleColor={green[900]} animationType={'number'} />
            kgf
        </Box>
    );
}

export default About;