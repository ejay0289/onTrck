import { StyleSheet, Text, View } from "react-native";

export default function Head({spending,income,balance}) {
  return (
    <View style={styles.head}>
      <View style={styles.content}>
        <Text style={styles.spending}>spending{'\n'}{spending}</Text>
        <Text style={styles.balance}>Balance{'\n'}{balance}</Text>
        <Text style={styles.income}>Income{'\n'}{income}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    padding:20,
    justifyContent: "space-between",
    alignItems:'center',
    backgroundColor: "#bceaf7",
    height:220,
    alignItems:'center',
    
  },
  spending:{
    color:'red',
    textAlign:"center"
  },
  income:{
    color:'green',
    textAlign:"center"

  },
  balance:{
    textAlign:"center"
  }

});
