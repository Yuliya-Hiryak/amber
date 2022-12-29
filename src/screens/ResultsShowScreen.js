import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import yelp from '../api/yelp'


const ResultsShowScreen = ({navigation}) => {
  const id = navigation.getParam('id')
  const [result, setResult] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')

  const getResultByIdApi = async (id) => {
    try {
      const {data} = await yelp.get(`/businesses/${id}`)
      setErrorMsg('')
      setResult(data)
    } catch (err) {
      console.log(err)
      setResult(null)
      setErrorMsg('Something went wrong :(')
    }
  }

  useEffect(() => {
    getResultByIdApi(id)
  }, [])

  if (!result) {
    return null
  } else if (!result && errorMsg.length) {
    return <Text>Somethings went wrong!</Text>
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.address}>
      {result.location.display_address.join('\n')}
      </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
   fontSize: 18,
   fontWeight: 'bold',
   marginHorizontal: 15,
   marginTop: 15
  },
  address: {
   margin: 15
  },
  image: {
    width: 250,
    height: 150.,
    margin: 15,
    borderRadius: 4
  }
})

export default ResultsShowScreen
