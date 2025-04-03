import { AppBar, Toolbar, Typography, Fab } from "@mui/material";
import { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import DataContext from "../../contexts/DataContext";

const Navbar = () => {
    const { setOpen } = useContext(DataContext);
    return (
        <AppBar sx={{ display: { xs: 'block', md: 'none' } }} position="sticky">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography>Live Your Dreams</Typography>
                <Fab sx={{ m: 1 }} size="small" aria-label="menu" onClick={() => setOpen(true)}>
                    <FiMenu style={{ fontSize: '20px' }} />
                </Fab>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;