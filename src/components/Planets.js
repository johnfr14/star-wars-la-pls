import { useEffect, useState } from "react"
import Planet from "./Planet"
import fetchPlanets from "../fetchPlanets"


const Planets = () => {
const planet = []
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
      setPlanets(data.results)
    })
    .catch((error) => {
      console.error(error.message)
    })
}, [])

for (const elem of planets) {
    planet.push(<Planet key={elem.name} name={elem.name} pop={elem.population} climat={elem.climate}/>)
  }

return(
  <div className="row" wfd-id="2">
    {planet}
    <button onClick={handleButtonClick} type="button" className="btn btn-dark" wfd-id="14">suivantes</button>
  </div>
) 
}

export default Planets