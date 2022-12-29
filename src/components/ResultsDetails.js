import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultDetails = ({result}) => {
  return (
    <View style={styles.root}>
      <Image
        source={{uri: result.image_url}}
        style={styles.image}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.details}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
   paddingLeft: 15,
   marginBottom: 10,
   borderBottomWidth: 1,
   borderBottomColor: '#777'
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4
  },
  name: {
    fontWeight: 'bold',
    marginTop: 15
  },
  details: {
    color: '#777',
    marginBottom: 10
  }
})

export default ResultDetails
