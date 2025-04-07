import { Box, IconButton, Typography } from "@mui/material";
import Portal from "./Portal";
import { modal } from "../utils/animations";
import { BsXLg } from "react-icons/bs";

const Modal = ({ item, isOpen, isClose }) => {
    if (!isOpen) return null;
    return (
        <Portal>
            <Box display={"flex"} sx={{ backdropFilter: 'blur(5px)', animation: `${modal} .5s` }} position={"fixed"} zIndex={999} width={'100%'} height={'100%'} top={0} left={0} bgcolor={'rgba(0, 0, 0, 0.5)'} onClick={isClose}>
                <Box zIndex={1000} bgcolor={'#fff'} position={'fixed'} p={'5px 10px'} borderRadius={2} top={'50%'} left={'50%'} sx={{ animation: `${modal} .1s`, transform: 'translate(-50%, -50%)', boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.4)' }} display={'flex'} flexDirection={'column'}>
                    <Box display={"flex"} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography color={item.color} sx={{ textShadow: '0 0 1px #000', fontSize: '20px' }}>{item.icon}</Typography>
                        <IconButton color="error" sx={{ fontSize: '20px' }} onClick={isClose} >
                            <BsXLg />
                        </IconButton>
                    </Box>
                    <Box>
                        <Typography color={item.color} sx={{ textShadow: '0 0 1px #000' }}>{item.description}</Typography>
                    </Box>
                </Box>
            </Box>
        </Portal>
    );
}

export default Modal;