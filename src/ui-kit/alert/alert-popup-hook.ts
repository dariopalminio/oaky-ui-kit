import { useState } from 'react'
/**
 * use AlertPopup 
 * Custom hook
 */
export function useAlertPopup() {
    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show)
    };

    return {
        show,
        setShow,
        toggle
    }
}

export default useAlertPopup;