import { useEffect, useState } from 'react'
import './Content.css'
function Content({city}) {
  const [bgcolor,setBgcolor]=useState("linear-gradient(to bottom,#5b86e5,#36d1dc)")
    const [today, setTime]=useState(new Date())
    // const [city,setCity]=useState()
    const [country,setCountry]=useState("")
    const [temp,setTemp]=useState(0)
    const [weather,setWeather]=useState("")
    const [windspeed,setWindspeed]=useState(0)
    const [feel,setFeel]=useState(0)
    const [pressure,setPressure]=useState(0)
    const [error,setError]=useState("")
    const [icon, setIcon] = useState("");
    useEffect(()=>{
      setInterval(() => {
        setTime(new Date())
      }, 1000);
    },[])

useEffect(() => {
  if(!city)return;
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a81659021d6f56c609a4c1def03d6ad4&units=metric`
   fetch(url).then((resposne)=>resposne.json()).then((weatherData)=>{
      setCountry(weatherData.sys.country)
      setTemp(weatherData.main.temp)
      setWeather(weatherData.weather[0].main)
      const weatherType = weatherData.weather[0].main;
      if(weatherType === "Clear"){
    setBgcolor("linear-gradient(to bottom,#56CCF2,#F2C94C)");
}
else if(weatherType === "Clouds"){
    setBgcolor("linear-gradient(to bottom,#BDC3C7,#2C3E50)");
}
else if(weatherType === "Rain"){
    setBgcolor("linear-gradient(to bottom,#4B79A1,#283E51)");
}
else if(weatherType === "Thunderstorm"){
    setBgcolor("linear-gradient(to bottom,#41295A,#2F0743)");
}
else if(weatherType === "Snow"){
    setBgcolor("linear-gradient(to bottom,#E6F3FF,#BFDFFF)");
}
      setWindspeed(weatherData.wind.speed)
      setFeel(weatherData.main.feels_like)
      setPressure(weatherData.main.pressure)
      setIcon(weatherData.weather[0].icon);

}).catch((error)=>{
  setError(error.message)
})
}, [city]);

  return (
    <div className='cont' style={{background:setBgcolor}}>
      <div className='weth'>

      <h3><span>{city}</span></h3>
      <h3>{country}</h3>
      <h3>{Math.round(temp)}&deg;C</h3>
      <h3>{weather}</h3>
      {/* <img src={icon} alt="icon loading..." /> */}
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather"/>
      <div className='dis'>

      <div>
      <h3>💨 Wind Speed</h3>
      <h3>{windspeed} km/h</h3>
      </div>
      <div>
      <h3>🌡️ Feels Like</h3>
      <h3>{Math.round(feel)}&deg;C</h3>
      </div>
      <div>
      <h3>📊 Pressure</h3>
      <h3>{pressure} hPa</h3>
      </div>
      </div>
      </div>
      <div className='time'>

      <h3>📅{today.toDateString()}</h3>
      <h3>🕒{today.toLocaleTimeString()}</h3>
      </div>
      {error && <h3>{error} </h3>}
    </div>
  )
}

export default Content
