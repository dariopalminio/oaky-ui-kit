import { useState } from 'react'
/**
 * use AlertPopup 
 * Custom hook
 */
export default function useAlertPopup() {
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