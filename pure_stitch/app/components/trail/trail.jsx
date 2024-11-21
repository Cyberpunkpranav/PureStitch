import React, {useState, useEffect } from 'react'
import styles from './trail.module.scss'

const Trail = ({count}) => {
  console.log(count);
  
  let [trails,settrails] = useState([])
  let obj = {
    count :null
  }
  const countfunc = ()=>{
    let arr = []
    for(let i=0;i<count;i++){
      console.log(i);
      arr.push({
        count:i
      })
    }
    return arr
  }
  useEffect(()=>{
    settrails(countfunc())
   
  },[])
  
  
  return(
    <div className={styles.trail}>
      {
        trails.map((data,i)=>(
          <div key={i} style={{width:`${(100/trails.length)}%`}} className={styles.trail_paths}></div>
        ))
      }
      </div>
  )
  
}

export default Trail