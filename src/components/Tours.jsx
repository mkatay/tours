import React from 'react'
import {useQuery} from 'react-query';
import axios from 'axios'

const getData=async ()=>{
    const response=await axios.get('https://course-api.com/react-tours-project')
    return await response
}

export const Tours=()=>{
    const {data,status}=useQuery('tours',getData)

   
  return (
    <div>
        {status=='error' && <div>error fetching data...</div>}
        {status=='loading' && <div>loading...</div>}
        {status=='success' && <div>ok</div>}
    </div>
  )
}
