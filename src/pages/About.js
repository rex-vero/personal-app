import { Box, Grid, IconButton, Tooltip, Typography, Zoom } from "@mui/material";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { green } from "@mui/material/colors";
import { icons } from "../helpers/tooltip";
import Typing from "../helpers/Typing";

const About = () => {
    return (
        <Box>
            <ParticlesContainer particleColor={green[900]} animationType={'number'} />
            <Typography variant="h5" color="#fff">
                <Typing strings={['Things I Know:']} typeSpeed={200} showCursor />
            </Typography>
            <Grid container>
                {icons.map((item, key) => (
                    <Tooltip key={key} title={item.title} arrow slots={{ transition: Zoom }} slotProps={{ transition: { timeout: 300 } }}>
                        <IconButton sx={{ transition: '.5s', '&.MuiIconButton-root:hover': { color: item.color } }}>{item.icon}</IconButton>
                    </Tooltip>
                ))}
            </Grid>
        </Box>
    );
}

export default About;