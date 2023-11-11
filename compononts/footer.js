import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Footer({handleOpenModal,handleCloseModal}) {
  return (
    <View style={styles.container}>
      <AntDesign name="pluscircle" onPress={handleOpenModal} size={65} color="#116a7b" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:"center",
    marginBottom:10
  },
});
