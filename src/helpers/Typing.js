import { Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typing = ({ strings = [''], typeSpeed = 0, backSpeed = 0, backDelay = 0, loop = false, showCursor = false }) => {
    const typeEl = useRef(null);
    useEffect(() => {
        const animation = new Typed(typeEl.current, { strings, typeSpeed, backSpeed, backDelay, loop, showCursor })
        return () => animation.destroy();
    }, [strings, typeSpeed, backSpeed, backDelay, loop, showCursor]);
    return <Typography component={'span'} ref={typeEl} />
}

export default Typing;