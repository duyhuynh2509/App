import React, { Component } from 'react';
import { ScrollView, Text, View,StyleSheet } from 'react-native';
import Products from '../components/Products';
import {connect} from 'react-redux';

class CartScreen extends Component{
    state ={
        
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#C0C0C0'}}>
                <View style={{flex:1,backgroundColor:'skyblue',alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                    <Text style={styles.textHeader}>Carts</Text>
                </View>
                <View style={{flex:12}}>
                    <View  style={{ backgroundColor: '#FFF', flex: 1, flexDirection: 'column' }}>
                        {this.props.cartItems.length > 0 ?
                        <ScrollView>
                            <Products
                            onPress={this.props.removeItem}
                            products={this.props.cartItems} />
                        </ScrollView> :
                        <EmptyCart />
                        }
                    </View>
                </View>
            </View>
        )
    }
}
const EmptyCart = (props) => {
    return (
        <View style={{
            flex: 1,
            // flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                color: '#F00',
                fontSize: 20
            }}>No items in your cart</Text>
        </View>
    )
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
const mapStateToProps = (item) => {
    return {
        cartItems: item
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product, index) => {
            dispatch({ type: 'REMOVE_FROM_CART', payload: { ...product, index } })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartScreen)