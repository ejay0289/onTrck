import { StatusBar } from "expo-status-bar";
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";

import Head from "./compononts/head";
import Items from "./compononts/items";
import Footer from "./compononts/footer";
import MyModal from "./compononts/modal";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  
  const [spending, setSpending] = useState(0);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [amount,setAmount] = useState(0)

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setAmount(0)
  };

  const handleConfirmModal = () => {
    // Add logic for confirming modal action
    console.log("Modal confirmed");
    handleCloseModal();
    if(amount != 0){
      setSpending(amount)}

  };
const hideKB = ()=>{
  Keyboard.dismiss()
}


  return (
<TouchableWithoutFeedback onPress={()=>hideKB}> 
<View style={styles.container}>
      <Head income={income} balance={balance} spending={spending} />
      <Items />
      <Footer onClose={handleCloseModal} handleOpenModal={handleOpenModal} />
      <MyModal
      setSpending={setSpending}
      setAmount={setAmount}
        income={income}
        balance={balance}
        amount={amount}
        spending={spending}
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
      />
    </View>
</TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
});
