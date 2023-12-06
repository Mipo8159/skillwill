import { useEffect, useState } from "react"

const breakpoints = 576
const detectDevice = () => {
    return window.innerWidth <= breakpoints ? "MOBILE" : 'DESKTOP'
}
const useDetectDevice = () => {
    const [device, setDevice] = useState(() => detectDevice())

    useEffect(() => {
        const handleResize = () => {
            setDevice(detectDevice())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])

    return device
}

export default useDetectDevice