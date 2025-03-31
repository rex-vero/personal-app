import { Button, Stack } from '@mui/material';
import { useContext, useLayoutEffect } from 'react';
import TabPanel from './TabPanel';
import DataContext from '../../contexts/DataContext';
import DrawerTabs from '../drawer/DrawerTabs';

const MainContent = () => {
    const { value, open, setOpen } = useContext(DataContext);
    useLayoutEffect(() => {
        document.title = 'Personal App';
    }, [])
    return (
        <Stack alignItems={'center'} display={'flex'} >
            <TabPanel value={value} index={0}>
                Item 1
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item 2
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item 3
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item 4
            </TabPanel>
            <Button sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }} onClick={() => setOpen(true)}>click</Button>
            <DrawerTabs drawerOpen={open} />
        </Stack>
    );
}

export default MainContent;