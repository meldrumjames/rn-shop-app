import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../../constants/Colors";

const ProductItem = (props) => {
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <TouchableComp onPress={props.onViewDetail} useForeground>
      <View style={styles.product}>
        <Image source={{ uri: props.image }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>£{props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
          <Button
            color={Colors.primaryColor}
            title="View details"
            onPress={props.onViewDetail}
          />
          <Button
            color={Colors.primaryColor}
            title="Add to cart"
            onPress={props.onAddToCart}
          />
        </View>
      </View>
    </TouchableComp>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "60%",
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginVertical: 2,
  },
  price: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: "25%",
  },
});

export default ProductItem;
