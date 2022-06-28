import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from './List'
export default function StarRepo() {
    const [value, setValue] = useState("javascript")
    const [result, setResult] = useState([])
    const [filterValue, setFilterValue] = useState("")

    useEffect(() => {
        getStarRepo(value)
    }, [value])

    const getStarRepo = async (value) => {
        await axios.get(`https://api.github.com/search/repositories?q=language:${value}&sort=stars&order=desc&per_page=10`)
            .then((response) => {
                console.log(response)
                setResult(response.data.items)
            }).catch((error) => {
                console.log(error)
            })
    }

    const filters = result.filter((items)=>{
        if (filterValue.trim().length >= 3) {
            return items.name.toLowerCase().includes(filterValue.toLowerCase())
        }else{
            return result
        }
    })

    return (
        <>
            <div className="container col-10 mt-5 mb-5 w-100">
                <div className="input-group">
                    <input value={filterValue} onChange={(e)=>setFilterValue(e.target.value)} type="search" className="form-control" ariaLabel="Search" ariaDescribedby="search-addon" placeholder="جست و جو ....." dir='rtl' />
                </div>
            </div>
            <List value={filters}/>
        </>
    )
}
