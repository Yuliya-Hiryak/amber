import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  const searchApi = async (searchTerm) => {
    try {
      const {data} = await yelp.get('/businesses/search', {
        params: {
          limit: 50,
          term :searchTerm,
          location: 'San Jose'
        }
      })
      setErrorMsg('')
      setResults(data.businesses)
    } catch (err) {
      setResults([])
      setErrorMsg('Something went wrong :(')
    }

  }

  useEffect(() => {
    searchApi('pasta')
  }, [])

  return [searchApi, results, errorMsg]
}
