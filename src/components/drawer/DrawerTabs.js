import { Box, SwipeableDrawer, useMediaQuery } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

const DrawerTabs = ({ drawerOpen }) => {
    const { setOpen } = useContext(DataContext);
    const mediaQuery = useMediaQuery('(min-width:900px)');
    return (
        !mediaQuery && (<SwipeableDrawer transitionDuration={500} open={drawerOpen} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
            <Box role="presentation" onClick={() => setOpen(false)}>
                <Sidebar />
            </Box>
        </SwipeableDrawer>
        )
    );
}

export default DrawerTabs;