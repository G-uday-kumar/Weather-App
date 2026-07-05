import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Nav from './components/Nav'

function App() {
  const [search,setSearch]=useState("")
  const [city, setCity] = useState("");
  
  return (
    <>
    <div className="body">

      <Nav search={search} setSearch={setSearch} setCity={setCity}/>
      <Content search={search} city={city}/>
    </div>
    </>
  )
}

export default App
