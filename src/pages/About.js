import { Box, Chip, Divider, Grid, IconButton, Stack, Tooltip, Typography, Zoom } from "@mui/material";
import ParticlesContainer from "../helpers/ParticlesContainer";
import { green } from "@mui/material/colors";
import { icons } from "../helpers/tooltip";
import Typing from "../helpers/Typing";

const About = () => {
    return (
        <Box p={1}>
            <ParticlesContainer particleColor={green[900]} animationType={'number'} />
            <Grid sx={{ flexDirection: 'column', width: { xs: 'auto', md: '30vw' } }} container>
                <Typography variant="body1" color="#fff">
                    <Typing strings={["I'm a passionate Front-End Developer with strong expertise in React, Material-UI, Sass, HTML, CSS, Git, Bootstrap, and JavaScript. I build modern, responsive, and user-friendly interfaces that bring ideas to life. I'm always open to learning new technologies and pushing my limits because in the world of code, growth never stops."]} typeSpeed={5} />
                </Typography>
                <Divider sx={{ mt: 5 }} />
                <Typography mt={5} variant="body1" color="#fff">
                    <Typing strings={["“Every line of code I write is not just syntax, it's a step toward creating something meaningful.”"]} typeSpeed={60} />
                </Typography>
            </Grid>
            <Box mt={6}>
                <Chip label={<Typing strings={['Things I Know:']} typeSpeed={200} showCursor />} />
                <Grid container>
                    {icons.map((item, key) => (
                        <Tooltip key={key} title={item.title} arrow slots={{ transition: Zoom }} slotProps={{ transition: { timeout: 300 } }}>
                            <IconButton sx={{ transition: '.5s', '&.MuiIconButton-root:hover': { color: item.color } }}>{item.icon}</IconButton>
                        </Tooltip>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default About;