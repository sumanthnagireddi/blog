
import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setDataState] = useState(null);
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Unable to fetch data');
                    }
                    return res.json()
                })
                .then(data => {
                    setDataState(data)
                    setisLoading(false)
                })
                .catch(err => {
                    console.log(err.message);
                })
        }, 1000);

    }, [url])
    return { data, isLoading }
}


export default useFetch