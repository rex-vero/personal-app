import { Stack } from '@mui/material';
import { useContext, useLayoutEffect } from 'react';
import TabPanel from './TabPanel';
import DataContext from '../../contexts/DataContext';
import DrawerTabs from '../drawer/DrawerTabs';
import Navbar from './Navbar';

const MainContent = () => {
    const { value, open } = useContext(DataContext);
    useLayoutEffect(() => {
        document.title = 'Personal App';
    }, [])
    return (
        <>
            <Navbar />
            <DrawerTabs drawerOpen={open} />
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
            </Stack>
        </>
    );
}

export default MainContent;