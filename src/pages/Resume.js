import { Box } from "@mui/material";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { grey } from "@mui/material/colors";

const Resume = () => {
    return (
        <Box>
            <ParticlesContainer animationType={'link'} numParticles={35} particleColor={grey[700]} />
            hi
        </Box>
    );
}

export default Resume;