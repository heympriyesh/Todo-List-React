import React, { useEffect, useState } from 'react';
import Header from './Header';

const Search=({value})=>{
    const [serach,setSearch]=useState('');
    const [filtername,setfiltername]=useState([]);
        useEffect(()=>{
            if(serach.length>=3){
                console.log("value",filtername)
                setTimeout(()=>{
                    setfiltername(value.filter(item=>{
                        return  item.title2.toLowerCase().includes(serach.toLowerCase())
                      }))
                },3000)
            } else if(serach.length==0)
            {
                setfiltername([]);
            }
        },[serach,value])

    return(
            <>
            <div className="app-wrapper ">
            <Header value="Search Field"/>
                <input 
                className="task-input"
                    type="text"
                    placeholder="Search Name.."
                    value={serach}
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}
                />
                    {filtername.map((item)=>{
                        return(
                            <li className="list-item" key={item.id}>{item.title2}</li>
                      
                        )
                    })}
            </div>  
            </>
    )
}
export default Search;