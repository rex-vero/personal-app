import { useContext } from 'react';
import { Snackbar, Grow, Box, Typography } from '@mui/material';
import DataContext from '../../contexts/DataContext';

const SideSnack = () => {
    const { snackOpen, setSnackOpen } = useContext(DataContext);
    return (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={snackOpen} onClose={() => setSnackOpen(false)} slots={{ transition: Grow }} key={Grow} autoHideDuration={2000} >
            <Box onClose={() => setSnackOpen(false)} sx={{ width: '100%', bgcolor: 'rgba(255, 255, 255, 0.9)', px: 2, py: 1, borderRadius: 2 }}>
                <Typography variant='subtitle2'>I'm A Victom Of My Own Success!</Typography>
            </Box>
        </Snackbar>
    );
}

export default SideSnack;