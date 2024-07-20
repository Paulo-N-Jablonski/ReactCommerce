import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductDTO } from "../types/Product";
import ProductCard from "../components/ProductCard";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductList = () => {

  const [productList, setProductList] = useState<ProductDTO[]>([]);
  const URL = "https://fakestoreapi.com/products/category/electronics";

  const getProduct = async () => {
    try {
      const response = await axios.get<ProductDTO[]>(
        `${URL}`
      );
      setProductList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={productList}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#07161B",
    padding: 10,
  }
});