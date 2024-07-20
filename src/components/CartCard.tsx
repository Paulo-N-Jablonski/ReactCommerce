import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { ICartItem } from "../types/Product";
import { useCartContext } from "../contexts/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";

interface CartProps {
  cart: ICartItem;
}

const CartCard: FC<CartProps> = ({ cart }) => {

  const { removeProduct, } = useCartContext();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{cart.product.title}</Text>
        <View style={styles.row}>
          <Image style={styles.image} source={{ uri: cart.product.image }} />
          <View>
            <View style={styles.align}>
              <Text style={styles.price}>${cart.product.price}</Text>
              <Text style={styles.amount}>Amount: {cart.quantity}</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => removeProduct(cart.product.id)}
            >
              <Text style={styles.text}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CartCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f2d31",
    borderWidth: 1,
    borderRadius: 5,
    margin: 12,
    width: 620,
    height: 280
  },
  image: {
    width: 400,
    height: 200,
    resizeMode: "contain",
    right: 65
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "semibold",
    marginBottom: 10,
    alignSelf: 'center'
  },
  button: {
    height: 55,
    width: 120,
    borderRadius: 5,
    backgroundColor: '#07161B',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    right: 60
  },
  text: {
    color: "#FFFFFF",
    fontSize: 22,
    alignSelf: 'center'
  },
  price: {
    color: "#FFFFFF",
    fontSize: 24,
    alignSelf: 'center',
  },
  amount: {
    color: "#FFFFFF",
    fontSize: 24,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  align: {
    right: 60,
    paddingBottom: 25
  }
});