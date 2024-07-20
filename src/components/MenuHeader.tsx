import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuHeader = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("CartDetail")}>
      <MaterialIcons name="shopping-cart" size={40} color="#4169E1" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    right: 15
  },
});

export default MenuHeader;