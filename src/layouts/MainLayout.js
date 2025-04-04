import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { Grid, keyframes } from "@mui/material";
import { grey } from "@mui/material/colors";

const MainLayout = () => {
    const blurAnimation = keyframes`
  0% {
    filter: blur(10px);
  }
  100% {
    filter: blur(0);
  }
`;
    return (
        <Grid container columns={12} sx={{ animation: `${blurAnimation} 1s ease-in-out`, height: '100vh' }}>
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