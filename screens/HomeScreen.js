import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>Solwara Sefti</Text>
      <Image style={styles.tinyLogo} source={{ uri: 'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/logo.png',}}/>
      <StatusBar style="auto" />
      <NavOptions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleText: { 
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  tinyLogo: {
    width: 200,
    height: 200,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
