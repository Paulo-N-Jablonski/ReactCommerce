import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { ProductDTO } from "../types/Product";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useCartContext } from "../contexts/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";

interface ProductProps {
  product: ProductDTO;
}

const ProductCard: FC<ProductProps> = ({ product }) => {
  const navigation = useNavigation<any>();
  const { addProduct } = useCartContext();

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Details", product)}
      >
        <Text style={styles.title}>{product.title}</Text>

        <View style={styles.row}>
          <Image style={styles.image} source={{ uri: product.image }} />
          <View>
            <Text style={styles.price}>${product.price}</Text>
            <View style={styles.align}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => addProduct(product)}
              >
                <Text style={styles.text}>
                  Add to Cart
                </Text>
                <MaterialIcons name="shopping-cart" size={50} color="#1f2d31" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f2d31",
    borderWidth: 1,
    borderRadius: 5,
    margin: 12,
    width: 930,
    height: 430
  },
  image: {
    width: 700,
    height: 330,
    resizeMode: "contain",
    margin: 12,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "semibold",
    marginBottom: 10,
  },
  button: {
    height: 130,
    width: 300,
    borderRadius: 5,
    backgroundColor: '#07161B',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    alignSelf: 'center'
  },
  price: {
    color: "#FFFFFF",
    fontSize: 60,
    alignSelf: 'center',
    marginBottom: 20,
    right: 80
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  align: {
    right: 80
  },
});