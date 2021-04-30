

const fetchData = async (url, setPlanets, planets) => {
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("something went wrong")
      }
      return response.json()
    })
    .then((data) => {
      setPlanets([...planets,...data.results])
    })
    .catch((error) => {
      console.error(error.message)
    })
}

export default fetchData