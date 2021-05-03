import { useEffect, useState } from "react"
import Planet from "./Planet"
import fetchPlanets from "../fetchPlanets"


const Planets = () => {
const [planets, setPlanets] = useState([])
const [url, setUrl] = useState("https://swapi.dev/api/planets/")


const handleButtonClick = () => {
  fetchPlanets(url, setUrl, setPlanets, planets)
}

useEffect(() => {
  fetch("https://swapi.dev/api/planets/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("something went wrong")
      }
      return response.json()
    })
    .then((data) => {
      setUrl(data.next)
      setPlanets(data.results)
    })
    .catch((error) => {
      console.error(error.message)
    })
}, [])



return(
  <div className="row" wfd-id="2">
    {planets.map(elem => (
      <Planet key={elem.name} name={elem.name} pop={elem.population} climat={elem.climate}/>
    ))}
    <button onClick={handleButtonClick} type="button" className="btn btn-dark" wfd-id="14">suivantes</button>
  </div>
) 
}

export default Planets