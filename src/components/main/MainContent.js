import { Button, IconButton, Stack, Typography } from '@mui/material';
import { useLayoutEffect } from 'react';
import { BsTelegram } from 'react-icons/bs';
import { WiHail } from 'react-icons/wi';

const MainContent = () => {
    useLayoutEffect(() => {
        document.title = 'Personal App';
    }, [])
    return (
        <Stack alignItems={'center'} spacing={2} display={'flex'} >
            <Button color='error' variant='text'>main</Button>
            <Button variant='outlined' disableElevation>main</Button>
            <Button color='success' size='medium' startIcon={<BsTelegram />} variant='contained'>main</Button>
            <IconButton size='large' color='info'>
                <WiHail />
            </IconButton>
            <Typography variant='h1'>salam</Typography>
        </Stack>
    );
}

export default MainContent;