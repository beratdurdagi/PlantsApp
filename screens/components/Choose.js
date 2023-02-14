import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";

import COLORS from "../../consts/colors";
import plants from "../../consts/plants";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const widths = Dimensions.get("window").width / 2 - 30;

export default Choose = () => {
  const navigation = useNavigation();

  const Card = ({ plant }) => {
    return (
      <TouchableOpacity
        opacity={0.8}
        onPress={() =>
          navigation.navigate("Details", {
            id: plant.id,
            name: plant.name,
            image: plant.img,
            price:plant.price,
            abaout:plant.about,
          })
        }
      >
        <View
          style={{
            width: widths,
            height: 225,
            backgroundColor: COLORS.light,
            borderRadius: 20,
          }}
        >
          <View style={{ alignItems: "flex-end" }}>
            <Pressable
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: plant.like
                  ? "rgba(245, 42, 42,0.2)"
                  : "rgba(0,0,0,0.2) ",
              }}
            >
              <MaterialIcons
                name="favorite"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
              />
            </Pressable>
          </View>
          <View style={{ alignItems: "center", height: 100 }}>
            <Image
              source={plant.img}
              style={{ flex: 1, resizeMode: "contain" }}
            />
          </View>

          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: "bold" }}>
              ${plant.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="plus" size={24} color="black" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ marginTop: 30, marginHorizontal: 20 }}>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({ item }) => {
          return <Card plant={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  touchStyle: {
    width: widths,
    borderRadius: 8,
    backgroundColor: "red",
    flexDirection: "row",
  },
});
