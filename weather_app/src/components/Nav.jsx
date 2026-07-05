import { useEffect, useState } from 'react';
import './Nav.css';
function Nav({search,setSearch,setCity}) {
    const [time,setTime]=useState(new Date())
    

   useEffect(()=>{ setInterval(()=>{
        setTime(new Date());
    },1000)
    
},[])
  return (
    <div>
      <div className="navb">
        <div>
           <h4>
            {time.toLocaleTimeString()}
            </h4> 
        </div>
        <div>
            <h2>
        Welcome to Weather app
            </h2>
        </div>
        <div>
          <h5>
          Enter city to check weather status here
          </h5>
          <input type="text" name="" value={search} onChange={(e)=>setSearch(e.target.value)} id="" placeholder='Enter city to search' />
          <button onClick={()=>setCity(search)}>Search</button>
          {/* <button onClick={()=>}></button> */}
        </div>
      </div>

    </div>
  )
}

export default Nav
