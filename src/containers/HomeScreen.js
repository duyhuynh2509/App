import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image,StyleSheet } from 'react-native';


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex:1,backgroundColor:'#C0C0C0'}}>
            <View style={{flex:1,backgroundColor:'skyblue',alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                <Text style={styles.textHeader}>Homes</Text>
            </View>
            <View style={{flex:12}}>
                <ScrollView>
                    <TouchableOpacity 
                    style={styles.card}
                    onPress={() => { this.props.navigation.navigate('Foods') }} >
                     <Text style={styles.cardText}>Foods</Text>
                    <Image style={styles.cardImage}
                        source={require('../images/foods.jpg')}
                        resizeMode="contain" />
                    
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.card}
                    onPress={() => { this.props.navigation.navigate('Drinks') }} >
                        <Text style={styles.cardText}>Drinks</Text>
                        <Image style={styles.cardImage}
                        source={require('../images/drinks.png')}
                        resizeMode="contain" />
                    
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
      },
      card: {
        width: '100%',
        height: 350,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1
      },
      cardImage: {
        flex: 1,
        width:550,
        height:550,
        marginTop:20
      },
      cardText: {
        position: 'absolute',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        zIndex: 2000,
        margin:5,
        fontWeight: 'bold',
        fontSize: 24,
      },
      textHeader:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        alignContent:'center',
        position:"absolute"
      }
})
  