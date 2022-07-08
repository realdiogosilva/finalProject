import * as React from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
       initialRegion={{
        latitude: 38.7541,
        longitude: -9.1855,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
        <Marker 
        coordinate={{
          latitude: 38.7541,
          longitude: -9.1855,
        }}
        draggable={true}
        onDragStart={(e => {
          console.log("Drag Start", e.nativeEvent.coordinates)
        })}
        onDragEnd={(e => {
          console.log("Drag End", e.nativeEvent.coordinates)
        })}
        >
          <Callout>
            <Text>User Location</Text>
          </Callout>
        </Marker>
        <Circle center={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        radius={1000}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});