import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import React,{useState} from "react";
import COLORS from "../../consts/colors";



export default function Category() {
    const [categoryIndex, setcategoryIndex] = useState(0);
    const categories = ["POPULAR", "ORGANIC", "INDOORS", "SYNTHETIC"];
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 30,
      }}
    >
      {categories.map((items, i) => (
        <TouchableOpacity key={i}
        activeOpacity={0.8}
        onPress={()=>
            setcategoryIndex(i)

        } >
          <View key={i}>
            <Text  style={[
                styles.categoryText,
                categoryIndex === i && styles.categoryTextSelected,
              ]}>{items}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles=StyleSheet.create({
    categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold',},
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
})