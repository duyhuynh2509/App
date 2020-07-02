import React, { Component } from 'react';
import { ScrollView, Text, View,StyleSheet } from 'react-native';
import {drinks} from '../utils/data';
import Products from '../components/Products';
import {connect} from 'react-redux';



class DrinkScreen extends Component{
    render() {
        return (
            <View  style={{flex:1,backgroundColor:'#C0C0C0'}}>
                <View style={{flex:1,backgroundColor:'skyblue',alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                    <Text style={styles.textHeader}>Drinks</Text>
                </View>
                <View style={{flex:12}}>
                    <ScrollView>
                        <Products products={drinks} onPress={this.props.addToCart} />
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
const mapDispatchToProps = (dispatch) =>{
    return{
        addToCart: (product) => dispatch({type:'ADD_TO_CART', payload:product})
    }
}
export default connect(null,mapDispatchToProps)(DrinkScreen)
