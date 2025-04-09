import { AppBar, Toolbar, Typography, Fab } from "@mui/material";
import { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import DataContext from "../../contexts/DataContext";
import Typing from "../../helpers/Typing";
import { translations } from "../../utils/translations";

const Navbar = () => {
    const { setOpen, lang } = useContext(DataContext);
    const { dream } = translations[lang];
    return (
        <AppBar sx={{ display: { xs: 'block', md: 'none' } }} position="fixed">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography>
                    <Typing strings={dream} typeSpeed={100} />
                </Typography>
                <Fab sx={{ m: 1 }} size="small" aria-label="menu" onClick={() => setOpen(true)}>
                    <FiMenu style={{ fontSize: '20px' }} />
                </Fab>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;