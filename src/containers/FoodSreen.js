import React, { Component } from 'react';
import { ScrollView, Text, View,StyleSheet } from 'react-native';
import {foods} from '../utils/data';
import Products from '../components/Products';
import {addToCart} from '../actions/cartAction'

class FoodScreen extends Component{
   
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#C0C0C0'}}>
                <View style={{flex:1,backgroundColor:'skyblue',alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                    <Text style={styles.textHeader}>Foods</Text>
                </View>
                <View style={{flex:12}}>
                    <ScrollView>
                        <Products products={foods} onPress={() => this.props.addProduct()} />
                    </ScrollView>
                </View>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
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

export default FoodScreen