import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ProductDTO } from "../types/Product";
import { useCartContext } from "../contexts/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetails = () => {
  const route = useRoute<any>();
  const { addProduct } = useCartContext();

  const { id, title, price, description, category, image, rating } =
    route.params as ProductDTO;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.containerItem}>
          <View style={styles.padding}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.row}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.padding}>
              <Text style={styles.textImage}>{description}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.align}>
              <Text style={styles.text}>Price: ${price}</Text>
              <View style={styles.row}>
                <Text style={styles.text}>Rate: {rating.rate}</Text>
                <Text style={styles.text}> / </Text>
                <Text style={styles.text}>Count: {rating.count}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Category: {category}</Text>
                <Text style={styles.text}> / </Text>
                <Text style={styles.text}>ID: {id}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => addProduct(route.params)}
            >
              <Text style={styles.text}>
                Add to Cart
              </Text>
              <MaterialIcons name="shopping-cart" size={40} color="#1f2d31" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#07161B"
  },
  containerItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f2d31",
    borderWidth: 1,
    borderRadius: 5,
    margin: 12,
    width: 900,
    height: 450
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "semibold",
  },
  textImage: {
    width: '25%',
    color: "#FFFFFF",
    margin: 4,
    fontSize: 18,
  },
  text: {
    color: "#FFFFFF",
    margin: 4,
    fontSize: 16,
  },
  padding: {
    paddingRight: 20,
    paddingLeft: 20
  },
  align: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    margin: 8,
  },
  button: {
    height: 100,
    width: 200,
    borderRadius: 5,
    backgroundColor: '#07161B',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    margin: 10,
    left: 180
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});