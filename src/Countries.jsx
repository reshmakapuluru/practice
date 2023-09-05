import React, { useEffect } from "react";
import axios from "axios";

function Countries(){
    var [country,setCountry]=React.useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
                setCountry(res.data)
        })
    })
    return(
        <div>
            <ul>
                {
                    country.length>0 && country.map((a)=>{
                        return <li>
                            <Link>{a.name.common}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Countries