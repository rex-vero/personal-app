import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { blurAnimation } from "../utils/animations";

const MainLayout = () => {
  return (
    <Grid container columns={12} sx={{ animation: `${blurAnimation} 1.5s ease-in-out`, height: '100vh' }}>
      <Grid bgcolor={grey[500]} size={{ xs: 0, md: 2 }} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Sidebar />
      </Grid>
      <Grid size={{ xs: 12, md: 10 }}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default MainLayout;