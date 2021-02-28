import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

const ProductDetailScreen = (props) => {
  const productID = props.navigation.getParam("productID");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productID)
  );

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
