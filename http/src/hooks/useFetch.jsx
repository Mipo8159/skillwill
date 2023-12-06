import { useCallback, useEffect, useState } from "react"

const useFetch = ({url, method}) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const onFetch = useCallback(() => {
      setLoading(true)
      fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
          }
        })
        .then(res => {
          if(!res.ok) throw new Error("Reponse failed")
          return res.json()
        })
        .then(data => setResponse(data))
        .catch(err => setError(err))
        .finally(() =>  setLoading(false))


        return () => {
          setResponse(null)
          setError(null)
          setLoading(false)
        }
  }, [url, method])

    useEffect(() => {
      onFetch()
    }, [onFetch])

    return {response, error, loading, resendReqeust: onFetch}
}

export default useFetch