import { Box } from "@mui/material";

const TabPanel = ({ children, value, index, ...other }) => {
    return (
        <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tabpanel-${index}`} {...other}>
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

export default TabPanel;