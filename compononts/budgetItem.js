import { StyleSheet, Text, View } from "react-native";

export default function BudgetItem({ item }) {
  const isInOrOut =
    item.amountType === "spending" ? { color: "red" } : { color: "green" };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.date}</Text>
      <Text style={[styles.text, isInOrOut]}>{item.amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:'white'
  },
  text: {},
});
