// MyModal.js
import React, { useState } from "react";
import {Picker} from '@react-native-picker/picker'
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const MyModal = ({
  setSpending,
  setAmount,
  amount,
  isVisible,
  onClose,
  onConfirm,
  spending,
  income,
  balance,
}) => {
  const handleAmount = (num) => {
    setAmount(num);
  };
  const [selected,selectedValue] = useState('option1')

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >


      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>

          <Text>This is a modal content</Text>
          <TextInput
            style={styles.input}
            clearButtonMode="always"
            value={amount}
            onChangeText={handleAmount}
            keyboardType="numeric"
          />
          <Button title="Close" onPress={onClose} />
          <Button title="Confirm" onPress={onConfirm} />

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#e0f8ff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});

export default MyModal;
