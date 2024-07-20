import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderStatus = () => {
  return (
    <View style={styles.container}>
      <Text>OrderStatus</Text>
    </View>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#07161B",
    padding: 10,
  }
});