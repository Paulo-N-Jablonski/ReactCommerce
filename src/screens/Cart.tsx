import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useCartContext } from "../contexts/CartContext";
import CartCard from "../components/CartCard";
import axios from "axios";
import { ICartItem } from "../types/Product";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  const { getCart, cart } = useCartContext();
  const navigation = useNavigation<any>();

  const totalPrice = () => {
    return cart.reduce((acc: number, cartItem: ICartItem) => {
      return acc + (cartItem.product.price * cartItem.quantity);
    }, 0)
  };

  useEffect(() => {
    getCart()
  }, [])

  return (
    cart && cart.length > 0 ? (
      <SafeAreaView>
        <View style={styles.container}>
          <FlatList
            data={cart}
            renderItem={({ item }) => <CartCard cart={item} />}
            keyExtractor={(item) => item.product.id.toString()}
          />
          <View style={styles.purchaseContainer}>
            <View style={styles.row}>
              <Text style={styles.text}>Total: ${totalPrice()}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Payment", cart)}
              >
                <Text style={styles.text}>
                  Purchase
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    ) : (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.purchaseContainer}>
            <Text style={styles.text}>Dont have any itens in the Cart</Text>
          </View>
        </View>
      </SafeAreaView>)
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#07161B",
    padding: 10,
  },
  purchaseContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f2d31",
    borderWidth: 1,
    borderRadius: 5,
    margin: 12,
    width: 360,
    height: 55
  },
  button: {
    height: 40,
    width: 120,
    borderRadius: 5,
    backgroundColor: '#07161B',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    left: 75
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    alignSelf: 'center'
  },
  price: {
    color: "#FFFFFF",
    fontSize: 22,
    alignSelf: 'center',
    right: 75
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    right: 40
  }
});