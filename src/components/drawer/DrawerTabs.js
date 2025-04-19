import { Box, SwipeableDrawer, useMediaQuery } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

const DrawerTabs = ({ drawerOpen }) => {
    const { setOpen, lang, themeMode } = useContext(DataContext);
    const mediaQuery = useMediaQuery('(min-width:900px)');
    return (
        !mediaQuery && (<SwipeableDrawer sx={{ '& .MuiDrawer-paper': { backgroundImage: 'none', bgcolor: themeMode === 'dark' ? '#343434' : 'rgb(128, 128, 128)' }, '&.MuiModal-root': { backdropFilter: 'blur(2px)' } }} anchor={lang === "fa" ? "left" : "right"} transitionDuration={250} open={drawerOpen} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
            <Box role="presentation" onClick={() => setOpen(false)}>
                <Sidebar />
            </Box>
        </SwipeableDrawer>
        )
    );
}

export default DrawerTabs;