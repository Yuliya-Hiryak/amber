import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'


const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMsg] = useResults()

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price)
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {!!errorMsg.length && <Text>{errorMsg}</Text>}
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
