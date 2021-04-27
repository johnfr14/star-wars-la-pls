const fetchPlanets = (url, setPlanets, setUrl) => {
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("something went wrong")
      }
      return response.json()
    })
    .then((data) => {
      //console.log(planets)
      //console.log(data.results)
      setUrl(data.next)
      setPlanets(data.results)
    })
    .catch((error) => {
      console.error(error.message)
    })
  
}

export default fetchPlanets