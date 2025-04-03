import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";

const MainLayout = () => {
    return (
        <Grid container columns={12} sx={{ height: '100vh' }}>
            <Grid bgcolor={grey[500]} size={{ xs: 0, sm: 0, md: 2 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Sidebar />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 10 }}>
                <Outlet />
            </Grid>
        </Grid>
    );
}

export default MainLayout;