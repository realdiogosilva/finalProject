import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';


const TravelRequest = () => {
const [text, onChangeText] = React.useState("");
const [number, onChangeNumber] = React.useState(null);
  return (
    <View>
      <Text style={styles.TextInitial}>Travel Request</Text>
      <Text style={styles.subtitle}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder=""
        keyboardType="numeric"
      />
      <Text style={styles.subtitle}>Vessel</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder=""
        keyboardType="numeric"
      />
      <Text style={styles.subtitle}>Vessel Identifier</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder=""
        keyboardType="numeric"
      />
      <Text style={styles.subtitle}>Type</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder=""
        keyboardType="numeric"
      />
      <Text style={styles.subtitle}>Type of Report</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder=""
        keyboardType="numeric"
      />
      <Text style={styles.subtitle}>Details</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder=""
        keyboardType="numeric"
      />
      <Text style={styles.subtitle}>Destination</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder=""
        keyboardType="numeric"
      />
      <Text style={styles.subtitle}>Number of people on board</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder=""
        keyboardType="numeric"
      />
        <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttontext}>Confirm</Text>
        </TouchableOpacity>
    <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttontext}>Cancel</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TravelRequest

const styles = StyleSheet.create({
    TextInitial: { 
        marginTop: 50,
        textAlign: 'center',
        color: '#4287f5',
        fontWeight: "bold",
        fontSize: 20,
    },
    subtitle: {
        color: '#4287f5',
        textAlign: 'left',
        marginLeft: 20,
        fontSize: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
      },
      button1: {
        backgroundColor: '#4287f5',
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        marginTop: 10,
        length: 10,
      },
      buttontext: {
          color: 'white',
          textAlign: 'center'
      }
  },
  );