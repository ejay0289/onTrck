import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Head from "./compononts/head";
import Items from "./compononts/items";
import Footer from "./compononts/footer";
import MyModal from "./compononts/modal";

export default function App() {
  const [budgetItems, setBudgetItems] = useState([
    {
      amount: 100,
      title: "wifi",
      date: `14 Nov,2023`,
      key: uuidv4(),
      amountType: "spending",
    },
    {
      amount: 200,
      title: "Groceries",
      date: `14 Nov,2023`,
      key: uuidv4(),
      amountType: "income",
    },
    {
      amount: 400,
      title: "Water bills",
      date: `14 Nov,2023`,
      key: uuidv4(),
      amountType: "spending",
    },
    {
      amount: 500,
      title: "Shopping",
      date: `14 Nov,2023`,
      key: uuidv4(),
      amountType: "spending",
    },
  
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [selectedAmount, setSelectedAmount] = useState("spending");

  const [spending, setSpending] = useState(0);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [temp, setTemp] = useState(0);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setAmount(0);
  };

  const handleConfirmModal = () => {
    // Add logic for confirming modal action
    handleCloseModal();

    switch (selectedAmount) {
      case "spending":
        setBudgetItems((prevItems) => [
          {
            amount: parseFloat(amount),
            title: title,
            date: `${day} ${month}, ${year}`,
            key: uuidv4(),
            amountType: "spending",
          },
          ...prevItems,
        ]);
        setBudgetItems((prevItems) => {
          const spendingItems = prevItems.filter(
            (item) => item.amountType === "spending"
          );
          const totalSpending = spendingItems.reduce(
            (total, item) => total + item.amount,
            0
          );
          setSpending(totalSpending);
          return prevItems;
        });
        setBalance(balance - amount);
        break;

      case "balance":
        if (balance == 0) {
          setBalance(parseFloat(amount));
          setTemp(amount);
        } else {
          setBalance(parseFloat(amount) + parseFloat(balance));
        }
        break;

      case "income":
        setBudgetItems((prevItems) => [
          {
            amount: parseFloat(amount),
            title: title,
            date: `${day} ${month}, ${year}`,
            key: uuidv4(),
            amountType: "income",
          },
          ...prevItems,
        ]);
        setBudgetItems((prevItems) => {
          const incomeItems = prevItems.filter(
            (item) => item.amountType === "income"
          );
          const totalIncome = incomeItems.reduce(
            (total, item) => total + item.amount,
            0
          );
          setIncome(totalIncome);
          return prevItems;
        });
        setBalance(parseFloat(balance) + parseFloat(amount));

        break;
    }
  };
  const hideKB = () => {
    Keyboard.dismiss();
  };

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  return (
    // <TouchableWithoutFeedback onPress={hideKB}>
    <View style={styles.container}>
      <View style={styles.cardContainer}>
      <Head income={income} balance={balance} spending={spending} />
      <View style={styles.card}></View>
      <Text style={styles.transactionText}>Latest Transactions</Text>
      <Items budgetItems={budgetItems} />
      </View>

      <Footer onClose={handleCloseModal} handleOpenModal={handleOpenModal} />
      <MyModal
        selected={selectedAmount}
        setSelected={setSelectedAmount}
        setSpending={setSpending}
        setSelectedAmount={setSelectedAmount}
        setAmount={setAmount}
        income={income}
        title={title}
        setTitle={setTitle}
        balance={balance}
        amount={amount}
        spending={spending}
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
      />
    </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer:{
    flex:1,
    position:'relat'
  },
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    justifyContent: "space-between",
  },
  card:{
    backgroundColor:'#fff',
    alignSelf:"center",
    borderRadius:10,
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height:80,
    zIndex:2,
    marginTop:-80,
    marginBottom:0,
    width:'70%'

  },
  transactionText:{
    marginVertical:20,
    marginLeft:15
  }
});
