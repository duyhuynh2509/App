import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {addToCart} from '../actions/cartAction';
import {connect} from 'react-redux';

class Products extends Component {
  async addProduct(item) {
    await this.props.addToCart(item);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.products.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.listItem}
            onPress={() => this.addProduct(item)}>
            <Image source={item.picture} style={{width: 150, height: 150}} />
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              {item.title + ' - ' + item.cost} VND
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    borderTopWidth: 3,
    borderTopColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    myCart: state.cart,
  };
};

const mapDispatchToProps = {addToCart};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
