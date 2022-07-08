import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

const DATA = [
  {
    id: '123',
    title: 'Travel Request',
    screen: 'TravelRequests'
  },
  {
    id: '456',
    title: 'About',
    screen: 'AboutScreen'
  },
  {
    id: '789',
    title: 'Map Screen',
    screen: 'MapScreen'
  },
];



const NavOptions = () => {
const Navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
            onPress={() => Navigation.navigate(item.screen)}>
                <View style={styles.item}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container2: {
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight || 0,
    width: 400,
    length: 100,
  },
  item: {
    backgroundColor: '#4287f5',
    padding: 20,
    margin: 10,
    borderRadius: 20
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
});

export default NavOptions;