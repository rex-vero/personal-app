import { Box } from "@mui/material";
import Typing from "../helpers/Typing";

const Home = () => {
    return (
        <Box>
            <Typing loop strings={['hello', 'how are you?']} typeSpeed={50} backDelay={20} backSpeed={25} />
        </Box>
    );
}

export default Home;