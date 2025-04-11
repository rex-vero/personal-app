import { Box, IconButton, Stack, Typography } from "@mui/material";
import Portal from "./Portal";
import { modal } from "../utils/animations";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ item, isOpen, isClose }) => {
    if (!isOpen) return null;
    return (
        <Portal>
            <Box sx={{ backdropFilter: 'blur(5px)', animation: `${modal} .5s` }} position={"fixed"} zIndex={999} width={'100%'} height={'100%'} top={0} left={0} bgcolor={'rgba(0, 0, 0, 0.5)'} onClick={isClose}>
                <Stack width={{ xs: '85%', md: 'auto' }} zIndex={1000} bgcolor={'rgba(0, 0, 0, 0.7)'} position={'fixed'} p={'5px 10px'} borderRadius={2} top={'50%'} left={'50%'} sx={{ animation: `${modal} .1s`, transform: 'translate(-50%, -50%)', boxShadow: ' 0 0 10px rgba(255, 255, 255, 0.4)' }}>
                    <Box justifyContent={'space-between'} alignItems={'center'}>
                        <IconButton color="error" sx={{ fontSize: '2.3rem' }} onClick={isClose} >
                            <RxCross2 />
                        </IconButton>
                    </Box>
                    <Stack alignItems={'center'} m={1}>
                        <Typography color={item.color} sx={{ fontSize: { xs: '5rem', md: '7rem' } }}>{item.icon}</Typography>
                        <Typography color={item.color} sx={{ textShadow: '0 0 1px #fff', fontSize: { xs: '1.2rem', md: '1.3rem' } }}>{item.description}</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Portal>
    );
}

export default Modal;