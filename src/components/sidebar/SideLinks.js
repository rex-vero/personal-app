import { Tabs, Tab, Typography } from '@mui/material';
import { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
import { IoHome, IoPerson } from "react-icons/io5";
import { PiPaperclipLight } from 'react-icons/pi';
import { FaPhoneAlt } from 'react-icons/fa';
import { grey } from '@mui/material/colors';
import { translations } from '../../utils/translations';

const SideLinks = () => {
    const { value, setValue, lang } = useContext(DataContext);
    const { tabs } = translations[lang];
    const tabProps = index => ({
        label: <Typography fontSize={13}>{tabs[index]}</Typography>,
        id: `tabpanel-${index}`,
        value: index,
        'aria-controls': `tabpanel-${index}`,
        sx: { '&.MuiTab-root': { 'm': 1, 'borderRadius': 2, 'backgroundColor': { 'xs': grey[800], 'md': grey[400] } } }
    });
    const tabsData = [
        { icon: <IoHome fontSize={24} />, ...tabProps(0) },
        { icon: <IoPerson fontSize={24} />, ...tabProps(1) },
        { icon: <PiPaperclipLight fontSize={24} />, ...tabProps(2) },
        { icon: <FaPhoneAlt fontSize={24} />, ...tabProps(3) }
    ];
    return (
        <Tabs textColor='secondary' variant="fullWidth" value={value} onChange={(_, tabNewValue) => setValue(tabNewValue)} orientation='vertical' sx={{ mt: 5 }}>
            {tabsData.map((item, key) => <Tab key={key} label={item.label} icon={item.label} {...item} />)}
        </Tabs>
    );
}

export default SideLinks;