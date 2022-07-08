import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <View>
      <Text style={styles.TextInitial}>AboutScreen</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
    TextInitial: { 
        marginTop: 50,
        marginLeft: 50,
    }
  });