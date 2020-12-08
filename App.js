import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ScreenArea from './components/ScreenArea/ScreenArea';
import ButtonArea from './components/ButtonArea/ButtonArea';

export default function App() {
  const [number, setNumber] = useState('0');
  const [operator, setOperator] = useState(null);
  const [rememberedNumber, setRememberedNumber] = useState(null);

  const handleNumberClick = (newNumber) => {
    if (+number === 0) {
      setNumber(newNumber);
    } else {
      setNumber(`${number}${newNumber}`);
    }
  };

  const handleOperationClick = (operation) => {
    setRememberedNumber(number);
    setNumber('0');
    setOperator(operation);
  };

  const handleEqualClick = () => {
    setNumber(eval(`${rememberedNumber} ${operator} ${number}`));
    setOperator(null);
    setRememberedNumber(null);
  }

  const handlePercent = () => {
    if (+number <= 0) {
      setNumber('0');
    } else {
      setNumber(number / 100 + '');
    }
  };

  const handleClear = () => {
    setNumber('0');
    setOperator(null);
  };

  const handleAddingDot = () => {
    if (!number.includes('.')) {
      setNumber(`${number}.`);
    }
  };

  const handleReverseSign = () => {
    setNumber(+number * -1 + '');
  };

  return (
    <View style={styles.container}>
      <ScreenArea number={number}/>
      <ButtonArea
        handleEqualClick={handleEqualClick}
        handleOperationClick={handleOperationClick}
        handleNumberClick={handleNumberClick}
        handleReverseSign={handleReverseSign}
        handlePercent={handlePercent}
        handleAddingDot={handleAddingDot}
        handleClear={handleClear}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    padding: 10,
    paddingBottom: 15,
  },
});
