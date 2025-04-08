import { useContext } from 'react';
import { Snackbar, Grow, Box, Typography } from '@mui/material';
import DataContext from '../../contexts/DataContext';
import { translations } from '../../utils/translations';

const SideSnack = () => {
    const { snackOpen, setSnackOpen, lang } = useContext(DataContext);
    const { msg } = translations[lang];
    return (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={snackOpen} onClose={() => setSnackOpen(false)} slots={{ transition: Grow }} key={Grow} autoHideDuration={2000} >
            <Box onClose={() => setSnackOpen(false)} sx={{ width: '100%', bgcolor: '#fff', px: 2, py: 1, borderRadius: 2 }}>
                <Typography variant='subtitle2'>{msg}</Typography>
            </Box>
        </Snackbar>
    );
}

export default SideSnack;