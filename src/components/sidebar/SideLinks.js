import { Tabs, Tab, Typography } from '@mui/material';
import { useContext } from 'react';
import { IoHome, IoPerson } from "react-icons/io5";
import { PiPaperclipLight } from 'react-icons/pi';
import DataContext from '../../contexts/DataContext';
import { FaPhoneAlt } from 'react-icons/fa';

const SideLinks = () => {
    const { value, setValue } = useContext(DataContext);
    const tabProps = (index) => {
        return {
            id: `tabpanel-${index}`,
            'aria-controls': `tabpanel-${index}`,
        };
    }
    return (
        <Tabs textColor='secondary' value={value} onChange={(_, tabNewValue) => setValue(tabNewValue)} orientation='vertical' variant='scrollable' scrollButtons allowScrollButtonsMobile>
            <Tab value={0} label={<Typography fontSize={13}>Home</Typography>} icon={<IoHome fontSize={24} />} {...tabProps(0)} />
            <Tab value={1} label={<Typography fontSize={13}>About Me</Typography>} icon={<IoPerson fontSize={24} />} {...tabProps(1)} />
            <Tab value={2} label={<Typography fontSize={13}>Resume</Typography>} icon={<PiPaperclipLight fontSize={24} />} {...tabProps(2)} />
            <Tab value={3} label={<Typography fontSize={13}>Contact Me</Typography>} icon={<FaPhoneAlt fontSize={24} />} {...tabProps(3)} />
        </Tabs>
    );
}

export default SideLinks;