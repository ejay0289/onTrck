// MyModal.js
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native";

const MyModal = ({
  setSpending,
  setAmount,
  amount,
  isVisible,
  onClose,
  onConfirm,
  selected,
  setSelected,
  title,
  setTitle,
  spending,
  income,
  balance,
}) => {
  const handleAmount = (amount) => {
    setAmount(amount);
  };

  const handleTitle = (title) =>{
    setTitle(title)
  }

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
            value={title}
            placeholder="Title"
            onChangeText={handleTitle}
          />
          <TextInput
            style={styles.input}
            clearButtonMode="always"
            value={amount.toString()}
            placeholder="Enter amount"
            onChangeText={handleAmount}
            keyboardType="numeric"
          />

          <Button title="Close" onPress={onClose} />
          <Button title="Confirm" onPress={onConfirm} />
          <Picker
            selectedValue={selected}
            onValueChange={(itemValue) => setSelected(itemValue)}
          >
            <Picker.Item label="Spending" value="spending" />
            <Picker.Item label="Income" value="income" />
          </Picker>
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
