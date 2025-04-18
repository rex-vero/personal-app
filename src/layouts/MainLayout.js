import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { Grid } from "@mui/material";
import { blurAnimation } from "../utils/animations";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";

const MainLayout = () => {
  const { themeMode } = useContext(DataContext);
  return (
    <Grid container columns={12} sx={{ animation: `${blurAnimation} 1.5s ease-in-out` }}>
      <Grid bgcolor={themeMode === 'dark' ? '#343434' : 'rgb(128, 128, 128)'} size={{ xs: 0, md: 2 }} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Sidebar />
      </Grid>
      <Grid size={{ xs: 12, md: 10 }}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default MainLayout;