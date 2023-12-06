import { useEffect, useState } from "react"

const useClickboard = (duration) => {
    const [copy, setCopy] = useState(false)

    const makeCopy = (value) => {
        if(typeof value === "string" || typeof value === "number"){
            navigator.clipboard.writeText(value)
            setCopy(true)
        }else{
            console.log('Invalid value')
            setCopy(false)
        }
    }

    useEffect(() => {
        let timeout
        if(copy){
           timeout = setTimeout(() => setCopy(false), duration || 3000)
        }
        return () => clearTimeout(timeout)
    },[copy, duration])

    return {makeCopy, copy}
}
export default useClickboard