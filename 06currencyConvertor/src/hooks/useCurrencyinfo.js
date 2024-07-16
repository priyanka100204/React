import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch( `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_lWdmVraIRrGZRgDry5kjq7cMluSAMT8eUFjIsBKG`)
        .then((res)=> res.json())
        .then((res) => setData(res[currency]))
    }, [currency])
    console.log(data);
    return data
   

}

export default useCurrencyInfo ; 