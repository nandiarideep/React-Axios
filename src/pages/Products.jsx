import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Products = () => {
    const [userData, setdata] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setdata(response.data);
        })
    },[])

  return (
    <>
        {userData.map((post) => {
            const { name, id, website, address, company } = post;
            return(
                <>
                <div className='justify-center rounded-xl border-[5px] border-black'>
                   <div className='flex flex-col justify-center items-center p-2 font-bold' key={id}>
                        <h1 className='text-[27px]'>{name.toUpperCase()}</h1>
                        <p className='text-[25px] text-[#308739]'>{address.city}</p>
                        <p className='text-[#e93434] text-[20px]'>{website}</p>
                        <p>{company.name}</p>
                    </div> 
                </div>  
                </>
            )
        })}
    </>
  )
}

export default Products
