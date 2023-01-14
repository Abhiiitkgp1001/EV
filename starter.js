import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomBar from './bottomBar';

const Starter = () => {
  return (
    <SafeAreaProvider>
      <Appbar.Header style={styles.appbar} elevated>
        <Appbar.Content titleStyle={{fontSize:24, fontWeight:'800'}} color='white' title="Cell DoC" />
      </Appbar.Header>
      <View style={styles.container}>
      
        <Pressable style={[styles.button, styles.shadowProp]} onPress={() => Alert.alert('SensePcb Connected')}>
          <Text style={styles.text}>Connect to a SensePcB</Text>
        </Pressable>
        <View style={[styles.card, styles.shadowPropCard]}>
          
          <Text>
            <Text style={styles.heading}>
              7.37 
            </Text>
            <Text style={styles.body}>
              Km/h
            </Text>
          </Text>
          <Text style={styles.body2}>Velocity</Text>
        </View>
        
      </View>
      <BottomBar/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282A3A',
    alignItems: 'center',
    justifyContent:'center'
  },
  appbar:{
    backgroundColor: '#282A3A',
  },
  textColor:{
    color:'black'
  },
  heading: {
    fontSize: 48,
    fontWeight: '800',
    color:'white'
  },
  body: {
    fontSize: 28,
    fontWeight: '500',   color:'white'
  },
  body2 : {
    fontSize: 20,
    fontWeight: '500',
    textAlign:'center',color:'white'
  },
  card: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding:20,
    marginTop: 40,
  },
  shadowPropCard: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
export default Starter;