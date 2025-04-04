import { AppBar, Toolbar, Typography, Fab } from "@mui/material";
import { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import DataContext from "../../contexts/DataContext";
import Typing from "../../helpers/Typing";

const Navbar = () => {
    const { setOpen } = useContext(DataContext);
    return (
        <AppBar sx={{ display: { xs: 'block', md: 'none' } }} position="sticky">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography>
                    <Typing strings={['Live Your Dreams!']} typeSpeed={100} />
                </Typography>
                <Fab sx={{ m: 1 }} size="small" aria-label="menu" onClick={() => setOpen(true)}>
                    <FiMenu style={{ fontSize: '20px' }} />
                </Fab>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;