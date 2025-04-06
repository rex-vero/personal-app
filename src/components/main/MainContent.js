import { Stack } from '@mui/material';
import { useContext, useLayoutEffect } from 'react';
import TabPanel from '../../helpers/TabPanel';
import DataContext from '../../contexts/DataContext';
import DrawerTabs from '../drawer/DrawerTabs';
import Navbar from './Navbar';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Resume from '../../pages/Resume';
import Contact from '../../pages/Contact';
import SideSnack from '../sidebar/SideSnack';

const MainContent = () => {
    const { value, open } = useContext(DataContext);
    useLayoutEffect(() => {
        document.title = 'Personal App';
    }, [])
    return (
        <>
            <Navbar />
            <DrawerTabs drawerOpen={open} />
            <SideSnack />
            <Stack alignItems={'center'} display={'flex'} justifyContent={'center'} height={'100vh'}>
                <TabPanel value={value} index={0}>
                    <Home />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <About />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Resume />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Contact />
                </TabPanel>
            </Stack>
        </>
    );
}

export default MainContent;