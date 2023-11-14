import { StyleSheet, Text, View, FlatList } from "react-native";
import BudgetItem from "./budgetItem";

export default function Items({ budgetItems }) {
  return (
    <View style={styles.container}>
        
      <FlatList
        data={budgetItems}
        keyExtractor={(item) => item.key.toString()}

        renderItem={({ item }) => <BudgetItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,
 },
});
