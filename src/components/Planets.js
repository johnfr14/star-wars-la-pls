import { useEffect, useState } from "react"
import Planet from "./Planet"
import fetchPlanets from "../fetchPlanets"

const Planets = () => {
const [planets, setPlanets] = useState([])
const [url, setUrl] = useState("https://swapi.dev/api/planets/")
const planet = []

const handleButtonClick = () => {
  fetchPlanets(url, setPlanets, setUrl)
}

useEffect(() => {
fetchPlanets(url, setPlanets, setUrl)
}, [url])

console.log(planets)
for (const elem of planets) {
  planet.push(<Planet key={elem.name} name={elem.name} pop={elem.population} climat={elem.climate}/>)
}

return(
  <div className="row" wfd-id="2">
    {planet}
    <button onClick={handleButtonClick} type="button" class="btn btn-dark" wfd-id="14">suivantes</button>
  </div>
) 
}

export default Planets