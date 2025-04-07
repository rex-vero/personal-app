import { Tabs, Tab } from '@mui/material';
import { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
import { tabsData } from '../../utils/sideData';

const SideLinks = () => {
    const { value, setValue } = useContext(DataContext);
    return (
        <Tabs textColor='secondary' variant="fullWidth" value={value} onChange={(_, tabNewValue) => setValue(tabNewValue)} orientation='vertical' sx={{ mt: 5 }}>
            {tabsData.map((item, key) => <Tab key={key} label={item.label} icon={item.label} {...item} />)}
        </Tabs>
    );
}

export default SideLinks;