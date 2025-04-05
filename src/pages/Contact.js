import { Box } from "@mui/material";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { lightBlue } from "@mui/material/colors";

const Contact = () => {
    return (
        <Box>
            <ParticlesContainer animationType={'color'} particleColor={lightBlue[700]} />
            hi
        </Box>
    );
}

export default Contact;