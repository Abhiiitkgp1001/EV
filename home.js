import * as React from 'react';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { Alert, Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomBar from './bottomBar';
const Home = () => {

  return (
    <SafeAreaProvider>
      <Appbar style={{backgroundColor:'#282A3A'}}/>
      <View style={styles.container}>
        <View style={{ display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
            <View>
                <Text style={[styles.body2,{marginBottom:12,textAlign:'left'}]}>23 Dec 2022</Text>
                <View style={{ display:'flex',flexDirection:'row', alignItems:'center'}}>
                    <View style={{width:12, height:12, borderRadius:16, backgroundColor:'red',marginRight:16}}></View>
                    <Text style={styles.body}>Live Data</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.t1}>Upload</Text>
                <View style={{height:8}}/>
                <Text style={styles.t2}>0 hr 0 min</Text>
            </View>
        </View>
       <View style={{ marginTop:28, display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
            <View style={styles.card}>
                <Text>
                    <Text style={styles.heading}>
                    50.6 
                    </Text>
                    <Text style={styles.body}>
                    V
                    </Text>
                </Text>
                <Text style={styles.body2}>Voltage</Text>
            </View>
            <View style={styles.card}>
                <Text>
                    <Text style={styles.heading}>
                    1.102
                    </Text>
                    <Text style={styles.body}>
                    A
                    </Text>
                </Text>
                <Text style={styles.body2}>Current</Text>
            </View>
            <View style={styles.card}>
                <Text>
                    <Text style={styles.heading}>
                    35.0
                    </Text>
                    <Text style={styles.body}>
                    %
                    </Text>
                </Text>
                <Text style={styles.body2}>Voltage</Text>
            </View>
       </View>
       <View style={{ marginTop:16, display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
            <View style={styles.card}>
                <Text>
                    <Text style={styles.heading}>
                    21.6 
                    </Text>
                    <Text style={styles.body}>
                    C
                    </Text>
                </Text>
                <Text style={styles.body2}>Avg. Temp.</Text>
            </View>
            <View style={styles.card}>
                <Text>
                    <Text style={styles.heading}>
                    1.02
                    </Text>
                    <Text style={styles.body}>
                    A
                    </Text>
                </Text>
                <Text style={styles.body2}>Distance</Text>
            </View>
            <View style={styles.card}>
                <Text>
                    <Text style={styles.heading}>
                    0.67
                    </Text>
                    <Text style={styles.body}>
                    kW
                    </Text>
                </Text>
                <Text style={styles.body2}>Power</Text>
            </View>
       </View>
       <View style={{ marginTop:16, display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
            <View style={styles.card}>
                <Text>
                    <Text style={styles.heading}>
                    3.17 
                    </Text>
                    
                </Text>
                <Text style={[styles.body,{textAlign:'center'}]}>
                    km/h
                    </Text>
                <Text style={[styles.body2,{textAlign:'center'}]}>Velocity</Text>
            </View>
            <View style={styles.card}>
                <Text>
                    <Text style={styles.heading}>
                    48.97
                    </Text>
                   
                </Text>
                <Text style={[styles.body,{textAlign:'center'}]}>
                    km/kWh
                    </Text>
                <Text style={[styles.body2,{textAlign:'center'}]}>Mileage</Text>
            </View>
            <View style={styles.card}>
                <Text>
                    <Text style={styles.heading}>
                    0.00
                    </Text>
                    
                </Text>
                <Text style={[styles.body,{textAlign:'center'}]}>
                    kW
                    </Text>
                <Text style={[styles.body2,{textAlign:'center'}]}>Power</Text>
            </View>
       </View>
        
      </View>
      <BottomBar/>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282A3A',
      padding:20
    },
    textColor:{
      color:'white'
    },
    t1:{
      fontSize: 18,
      fontWeight: '500',
      color:'white'
    },
    t2:{
        fontSize: 14,
        fontWeight: '400',
        color:'white'
      },
    heading: {
      fontSize: 32,
      fontWeight: '600',
      color:'white'
    },
    body: {
      fontSize: 20,
      fontWeight: '500',
      color:'white'   
    },
    body2 : {
      fontSize: 16,
      fontWeight: '500',
      textAlign:'center',
      color:'white',
    },
    card: {
      backgroundColor: '#000000',
      borderRadius: 16,
      padding:20,
    },
    shadowPropCard: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
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

export default Home;