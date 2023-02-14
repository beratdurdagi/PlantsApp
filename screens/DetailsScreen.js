import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { useNavigation, useRoute } from "@react-navigation/native";
import COLORS from "./../consts/colors";
let x = 0;
let total = 0;

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [count, setCount] = useState(0);


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={style.imageContainer}>
        <Image
          source={route.params.image}
          style={{ resizeMode: "contain", flex: 1 }}
        />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View style={style.line} />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Best choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            {route.params.name}
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              ${route.params.price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>About</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}
          >
            {route.params.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              marginLeft: 60,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pressable
                onPress={() => {
                  if (x == 0) {
                    setCount(0);
                    alert("Sayı - olamaz");
                  } else {
                    setCount(x--);
                  }
                }}
                style={style.borderBtn}
              >
                <Text style={style.borderBtnText}>-</Text>
              </Pressable>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: "bold",
                }}
              >
                {x}
              </Text>
              <Pressable onPress={() => setCount(x++)} style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </Pressable>

              <Text style={{ marginLeft: 5, ...style.borderBtnText }}>
                {Math.round(total + route.params.price * x)}
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          style={{
            ...style.buyBtn,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 100,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 18,
              fontWeight: "bold",
            }}
            onPress={()=>{alert("Satın Alma Başarılı");}}
          >
            Buy
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 40,
  },
  borderBtnText: { fontWeight: "bold", fontSize: 28 },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetailsScreen;
