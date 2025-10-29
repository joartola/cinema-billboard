import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SegmentControl from './SegmentControl'

const Movie = ({ title, poster, description }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: poster }} style={styles.poster} />
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

export default Movie

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    poster: {
        height: 200,
        borderRadius: 8,
        marginVertical: 10,
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
})