import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typing = ({ strings = [''], typeSpeed = 0, backSpeed = 0, backDelay = 0, loop = false, showCursor = false, className = null, style = {} }) => {
    const typeEl = useRef(null);
    useEffect(() => {
        const animation = new Typed(typeEl.current, { strings, typeSpeed, backSpeed, backDelay, loop, showCursor })
        return () => animation.destroy();
    }, [strings, typeSpeed, backSpeed, backDelay, loop, showCursor]);
    return <span className={className} style={style} ref={typeEl} />
}

export default Typing;