
const fetchPlanets = (url, setUrl) => {
    fetch(url)
    .then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error("something went wrong")
      }
      return response.json()
    })
    .then((data) => {
      setUrl(data.next)
    })
    .catch((error) => {
      console.error(error.message)
    })
}

export default fetchPlanets