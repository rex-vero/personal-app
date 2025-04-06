import { Typography } from '@mui/material';
import { IoHome, IoPerson } from "react-icons/io5";
import { PiPaperclipLight } from 'react-icons/pi';
import { FaPhoneAlt } from 'react-icons/fa';
import { grey } from '@mui/material/colors';

const tabProps = index => ({
    id: `tabpanel-${index}`,
    value: index,
    'aria-controls': `tabpanel-${index}`,
    sx: { '&.MuiTab-root': { 'm': 1, 'borderRadius': 2, 'backgroundColor': { 'xs': grey[800], 'md': grey[400] } } }
});
export const tabsData = [
    { label: <Typography fontSize={13}>Home</Typography>, icon: <IoHome fontSize={24} />, ...tabProps(0) },
    { label: <Typography fontSize={13}>About Me</Typography>, icon: <IoPerson fontSize={24} />, ...tabProps(1) },
    { label: <Typography fontSize={13}>Resume</Typography>, icon: <PiPaperclipLight fontSize={24} />, ...tabProps(2) },
    { label: <Typography fontSize={13}>Contact Me</Typography>, icon: <FaPhoneAlt fontSize={24} />, ...tabProps(3) }
];