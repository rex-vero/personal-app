import { Tabs, Tab, Typography } from '@mui/material';
import { useState } from 'react';
import { IoHome, IoPerson } from "react-icons/io5";
import { PiPaperclipLight } from 'react-icons/pi';
import { MdConnectWithoutContact } from "react-icons/md";

const SideLinks = () => {
    const [value, setValue] = useState(1);
    const handleChange = (_, newValue) => setValue(newValue);

    return (
        <Tabs value={value} onChange={handleChange} orientation='vertical' variant='scrollable' scrollButtons allowScrollButtonsMobile>
            <Tab value={1} label={<Typography fontSize={13}>Home</Typography>} icon={<IoHome fontSize={24} />} />
            <Tab value={2} label={<Typography fontSize={13}>About Me</Typography>} icon={<IoPerson fontSize={24} />} />
            <Tab value={3} label={<Typography fontSize={13}>Resume</Typography>} icon={<PiPaperclipLight fontSize={24} />} />
            <Tab value={4} label={<Typography fontSize={13}>Contact Me</Typography>} icon={<MdConnectWithoutContact fontSize={24} />} />
        </Tabs>
    );
}

export default SideLinks;