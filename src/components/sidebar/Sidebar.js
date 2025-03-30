import { Box } from "@mui/material";
import SideLinks from "./SideLinks";
import SideHead from "./SideHead";

const Sidebar = () => {
    return (
        <Box position={'sticky'} top={16} mt={2} >
            <SideHead />
            <SideLinks />
        </Box>
    );
}

export default Sidebar;